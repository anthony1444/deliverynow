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
import { SwUpdate } from '@angular/service-worker';


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


  constructor(private swUpdate: SwUpdate) {}

  ngOnInit(): void {
    this.checkForUpdates();
  }

 checkForUpdates(): void {
    // Verificar si el Service Worker está habilitado
    if (this.swUpdate.isEnabled) {
      // Comprobar si hay una actualización disponible
      this.swUpdate.checkForUpdate().then(() => {
        console.log('Verificación de actualización completada.');
      }).catch((error) => {
        console.error('Error al verificar actualizaciones:', error);
      });

      // Detectar cuando la nueva versión esté disponible (esto debe manejarse de manera diferente)
      this.swUpdate.activateUpdate().then((event) => {
        console.log('Nueva versión disponible:', event);
        // Notificar al usuario que hay una nueva versión
        if (confirm('¡Hay una nueva versión disponible! ¿Quieres actualizar?')) {
          window.location.reload();
        }
      });
    }
  }
}
