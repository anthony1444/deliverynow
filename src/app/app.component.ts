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


  constructor(private notificationService: NotificationService) { }

  async ngOnInit(): Promise<void> {


    await this.enableNotifications();
    this.checkNotificationStatus();
  }


  async enableNotifications2(): Promise<void> {
    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        console.log('Permiso concedido para notificaciones.');
      } else if (permission === 'denied') {
        console.log('Permiso denegado para notificaciones. Revisa la configuración del navegador.');
      }
    } catch (error) {
      console.error('Error solicitando permisos de notificación:', error);
    }
  }
  
  async enableNotifications(): Promise<void> {
    try {
      const permission = await this.notificationService.requestPermission();

      if (permission === 'granted') {
        await this.notificationService.subscribeToNotifications();
        this.notificationStatus = 'Notifications are enabled.';
      } else if (permission === 'denied') {
        this.notificationStatus =
          'Notifications have been denied. Please enable them in browser settings.';
      } else {
        this.notificationStatus = 'Notifications are not enabled yet.';
      }
    } catch (error) {
      console.error('Failed to enable notifications:', error);
      this.notificationStatus =
        'Failed to enable notifications. Check console for details.';
    }
  }

  private checkNotificationStatus(): void {
    console.log("a");
    
    if (Notification.permission === 'granted') {
      this.notificationStatus = 'Notifications are already enabled.';
    } else if (Notification.permission === 'denied') {
      this.notificationStatus =
        'Notifications are blocked. Please enable them in browser settings.';
    }
  }
}
