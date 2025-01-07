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

  constructor(private swPush: SwPush, private http: HttpClient) {}

  /**
   * Solicita permisos para notificaciones al usuario.
   * @returns Una promesa con el resultado del permiso.
   */
  async requestPermission(): Promise<NotificationPermission> {
    if (Notification.permission === 'default') {
      return await Notification.requestPermission();
    }
    return Notification.permission;
  }

  /**
   * Suscribe al usuario a notificaciones push.
   */
  async subscribeToNotifications(): Promise<void> {
    if (!this.swPush.isEnabled) {
      throw new Error('Push notifications are not enabled in this browser.');
    }

    try {
      const subscription = await this.swPush.requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY,
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
}
