import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private readonly VAPID_PUBLIC_KEY = environment.apiNotificationHub; // Clave pública VAPID
  private readonly BACKEND_URL = ''; // URL de tu backend o Azure Function

  constructor(private swPush: SwPush, private http: HttpClient) {
    console.log(this.VAPID_PUBLIC_KEY);
    
  }

  /**
   * Solicita permisos para notificaciones al usuario.
   * @returns Una promesa con el resultado del permiso.
   */
  async requestPermission(): Promise<NotificationPermission> {
    if (Notification.permission === 'denied') {
      const  result = await Notification.requestPermission()
      console.log(result)
      return result;
    }
    return Notification.permission;
  }

  /**
   * Suscribe al usuario a notificaciones push.
   */
  async subscribeToNotifications(): Promise<void> {
    console.log(this.VAPID_PUBLIC_KEY);

    if (!this.swPush.isEnabled) {
      throw new Error('Push notifications are not enabled in this browser.');
    }

    try {
      const subscription = await this.swPush.requestSubscription({
        serverPublicKey: this.cleanVapidKey(this.VAPID_PUBLIC_KEY),
      });

      console.log('Successfully subscribed to notifications:', subscription);

      // Enviar la suscripción al backend
      await this.sendSubscriptionToBackend(subscription);

      // Escuchar mensajes entrantes
      this.swPush.messages.subscribe((message) =>
        console.log('Push message received:', message)
      );

      // Manejar clics en notificaciones
      this.swPush.notificationClicks.subscribe((event) =>
        console.log('Notification clicked:', event)
      );
    } catch (err) {
      console.error('Error during subscription:', err);
      throw err;
    }
  }

  /**
   * Envía la suscripción al backend para integrarse con Azure Notification Hubs.
   * @param subscription La suscripción generada por el navegador.
   */
  private async sendSubscriptionToBackend(
    subscription: PushSubscription
  ): Promise<void> {
    try {
      const response = await this.http
        .post(`${this.BACKEND_URL}/subscribe`, subscription)
        .toPromise();
      console.log('Subscription sent to backend successfully:', response);
    } catch (error) {
      console.error('Error sending subscription to backend:', error);
      throw error;
    }
  }
  private urlBase64ToUint8Array(base64String: string): Uint8Array {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  private cleanVapidKey(key: string): string {
    return key.replace(/[\s]/g, ''); // Elimina espacios
  }

}
