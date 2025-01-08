import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotificationService } from './shared/services/notification/notification.service';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
    selector: 'app-root',
    standalone:true,
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        CommonModule,
        RouterModule,
        
    ],
    providers:[
      // NotificationService
    ],
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  notifactionkey= environment.apiNotificationHub
  opened = false;
  notificationStatus: string = '';
  private readonly NOTIFICATION_HUB_URL = 'https://NotificationHubDeliver.servicebus.windows.net/NotificationHubDeliver';

  readonly VAPID_PUBLIC_KEY = 'TU_CLAVE_VAPID_AQUI'; // Tu clave pública VAPID

  constructor(private http : HttpClient) {}

  ngOnInit(): void {
    // Verificar que el navegador soporta Service Workers
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('message', (event) => {
        console.log('Mensaje recibido desde el Service Worker:', event.data);

        if (event.data?.type === 'NOTIFICATION_RECEIVED') {
          // Manejar el mensaje de notificación recibido
          console.log('Notificación recibida:', event.data.payload);
          alert(`Notificación: ${event.data.payload.title}`);
        }
      });
    }
    this.requestPermission(); // Solicitar permiso al cargar la aplicación
  }

  // Solicitar permiso para recibir notificaciones
  async requestPermission(): Promise<void> {
    if (Notification.permission === 'default') {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        console.log('Permiso otorgado');
        this.subscribeToNotifications();
      } else {
        console.log('Permiso denegado');
      }
    } else if (Notification.permission === 'granted') {
      this.subscribeToNotifications();
    }
  }

  // Suscripción a las notificaciones push utilizando la API Push
  async subscribeToNotifications(): Promise<void> {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      try {
        const registration = await navigator.serviceWorker.register('/ngsw-worker.js'); // Registra el service worker
        console.log('Service Worker registrado con éxito:', registration);

        const subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: this.urlBase64ToUint8Array('BEU74zD465T2WQHt6P50AUmi_o4oaMRHTZ8GYsyo-Y6vSEPOLtlXRG8i_4-4IVXrKRbGqZDVixt5FFv50ao8XLQ') // VAPID public key
        });

        console.log('Suscripción a notificaciones:', subscription);
        this.sendNotification(subscription.endpoint,'hola')
        // Aquí puedes enviar la suscripción al backend si lo deseas,
        // pero ya que no quieres backend, puedes omitir este paso.
        
        // Escuchar notificaciones cuando el navegador esté activo
        navigator.serviceWorker.addEventListener('message', (event) => {
          console.log('Mensaje desde el Service Worker:', event);
        });
      } catch (error) {
        console.error('Error al suscribir a las notificaciones push:', error);
      }
    } else {
      console.error('El navegador no soporta Service Worker o PushManager.');
    }
  }

  // Convierte la clave pública VAPID en base64 a un Uint8Array
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


  sendNotification(endpoint: string, message: string) {
    // Crea los headers para la autenticación con la SAS Key
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'oDDZy2WUN0TdnHff0UBsTki8nnxSk5rUxwR6RIvMMb0=',
    });

    // Cuerpo de la solicitud (el mensaje de la notificación)
    const body = {
      endpoint: endpoint,
      payload: {
        notification: {
          title: 'Notificación desde Angular',
          body: message,
        }
      }
    };

    // Realiza la solicitud POST a Azure Notification Hub para enviar la notificación
    this.http
      .post(this.NOTIFICATION_HUB_URL, body, { headers })
      .subscribe(
        (response) => {
          console.log('Notificación enviada correctamente:', response);
        },
        (error) => {
          console.error('Error al enviar la notificación:', error);
        }
      );
  }

  
}
