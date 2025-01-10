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
  private apiKey = environment.apiKey;  // Reemplaza 'TU_CLAVE_AQUI' por tu clave real

  notifactionkey= environment.apiNotificationHub
  opened = false;
  notificationStatus: string = '';
  private readonly NOTIFICATION_HUB_URL = 'https://NotificationHubDeliver.servicebus.windows.net/NotificationHubDeliver';

  readonly VAPID_PUBLIC_KEY = 'TU_CLAVE_VAPID_AQUI'; // Tu clave pública VAPID
  title: string = '';
  body: string = '';
  constructor(private http : HttpClient) {
    this.subscribeToNotifications()

    if ('Notification' in window && navigator.serviceWorker) {
      // Agregar el listener para escuchar los mensajes del service worker
      navigator.serviceWorker.addEventListener('message', (event) => {
        console.log('Mensaje recibido del service worker:', event);
        // Aquí puedes manejar la notificación, por ejemplo, mostrando un modal o una alerta
        this.showNotification(event);
      });
    
      // Verificar si las notificaciones están habilitadas en el navegador
      if (Notification.permission !== 'granted') {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            console.log('Permiso de notificación otorgado');
          } else {
            console.log('Permiso de notificación denegado');
          }
        });
      }
    }
  }

  ngOnInit(): void {
    // Escucha si llega una notificación a través del Service Worker
    if ('Notification' in window && navigator.serviceWorker) {
      navigator.serviceWorker.addEventListener('message', (event) => {
        this.showNotification(event.data);
      });
    }
  }


  arrayBufferToBase64(buffer: ArrayBuffer): string {
    let binary = '';
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }



  async subscribeToNotifications() {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      const registration = await navigator.serviceWorker.register('firebase-messaging-sw.js');
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'BEU74zD465T2WQHt6P50AUmi_o4oaMRHTZ8GYsyo-Y6vSEPOLtlXRG8i_4-4IVXrKRbGqZDVixt5FFv50ao8XLQ'
      });


      const pushSubscription: any = {
        Endpoint: subscription.endpoint,
        P256DH: this.arrayBufferToBase64(subscription.getKey('p256dh') as ArrayBuffer),
        Auth: this.arrayBufferToBase64(subscription.getKey('auth') as ArrayBuffer)
      };
  

      console.log('Subscription:', subscription);
      this.http.post( `${environment.apiUrl}RegisterSubscription`, pushSubscription,{ headers: this.getHeaders() })
        .subscribe(response => console.log('Subscription registered:', response));
    }
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'x-functions-key': this.apiKey
    });
  }

  // ngOnInit(): void {
  //   // Verificar que el navegador soporta Service Workers
  //   if ('serviceWorker' in navigator) {
  //     navigator.serviceWorker.addEventListener('message', (event) => {
  //       console.log('Mensaje recibido desde el Service Worker:', event.data);

  //       if (event.data?.type === 'NOTIFICATION_RECEIVED') {
  //         // Manejar el mensaje de notificación recibido
  //         console.log('Notificación recibida:', event.data.payload);
  //         alert(`Notificación: ${event.data.payload.title}`);
  //       }
  //     });
  //   }
  //   this.requestPermission(); // Solicitar permiso al cargar la aplicación

  //   this.subscribeToNotifications2();
  // }

  // async subscribeToNotifications2() {
  //   const registration = await navigator.serviceWorker.ready;
  //   const subscription = await registration.pushManager.subscribe({
  //     userVisibleOnly: true,
  //     applicationServerKey: 'BEU74zD465T2WQHt6P50AUmi_o4oaMRHTZ8GYsyo-Y6vSEPOLtlXRG8i_4-4IVXrKRbGqZDVixt5FFv50ao8XLQ'
  //   });

  //   console.log('Subscription:', subscription);
  //   // Envía el objeto `subscription` a tu backend para usarlo con Azure
  // }


  

  // // Solicitar permiso para recibir notificaciones
  // async requestPermission(): Promise<void> {
  //   if (Notification.permission === 'default') {
  //     const permission = await Notification.requestPermission();
  //     if (permission === 'granted') {
  //       console.log('Permiso otorgado');
  //       this.subscribeToNotifications();
  //     } else {
  //       console.log('Permiso denegado');
  //     }
  //   } else if (Notification.permission === 'granted') {
  //     this.subscribeToNotifications();
  //   }
  // }

  // // Suscripción a las notificaciones push utilizando la API Push
  // async subscribeToNotifications(): Promise<void> {
  //   if ('serviceWorker' in navigator && 'PushManager' in window) {
  //     try {
  //       const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js'); // Registra el service worker
  //       console.log('Service Worker registrado con éxito:', registration);

  //       const subscription = await registration.pushManager.subscribe({
  //         userVisibleOnly: true,
  //         applicationServerKey: this.urlBase64ToUint8Array('BEU74zD465T2WQHt6P50AUmi_o4oaMRHTZ8GYsyo-Y6vSEPOLtlXRG8i_4-4IVXrKRbGqZDVixt5FFv50ao8XLQ') // VAPID public key
  //       });

  //       console.log('Suscripción a notificaciones:', subscription);
  //       // Aquí puedes enviar la suscripción al backend si lo deseas,
  //       // pero ya que no quieres backend, puedes omitir este paso.
        
  //       // Escuchar notificaciones cuando el navegador esté activo
  //       navigator.serviceWorker.addEventListener('message', (event) => {
  //         console.log('Mensaje desde el Service Worker:', event);
  //       });
  //     } catch (error) {
  //       console.error('Error al suscribir a las notificaciones push:', error);
  //     }
  //   } else {
  //     console.error('El navegador no soporta Service Worker o PushManager.');
  //   }
  // }

  // // Convierte la clave pública VAPID en base64 a un Uint8Array
  // private urlBase64ToUint8Array(base64String: string): Uint8Array {
  //   const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  //   const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  //   const rawData = window.atob(base64);
  //   const outputArray = new Uint8Array(rawData.length);
  //   for (let i = 0; i < rawData.length; ++i) {
  //     outputArray[i] = rawData.charCodeAt(i);
  //   }
  //   return outputArray;
  // }


  // sendNotification() {
  //   const payload = {
  //     title: 'Hello from Azure Function!',
  //     body: 'This is a test notification.'
  //   };

  //   this.http.post('https://<Your_Function_Url>/api/SendNotification', payload)
  //     .subscribe(response => {
  //       console.log('Notification sent:', response);
  //     });
  // }

   // Mostrar la notificación en el HTML
  showNotification(data: any) {
    if (Notification.permission === 'granted') {
      const options = {
        body: data.body,
        icon: 'assets/icons/icon-192x192.png', // Asegúrate de que la ruta sea correcta
      };
      new Notification(data.title, options);  // Muestra la notificación con los datos recibidos
    } else {
      console.log('Permiso de notificación no concedido');
    }
  }
  
}
