import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';

import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCIVYLJIapxu5b7QHU1MXDjrRn47ssk-H0",
  authDomain: "delivery-fffde.firebaseapp.com",
  projectId: "delivery-fffde",
  storageBucket: "delivery-fffde.firebasestorage.app",
  messagingSenderId: "244577228746",
  appId: "1:244577228746:web:b828118e21a2df1b596133",
  measurementId: "G-2QLPE6BHRE"
};

// Initialize Firebase
const app = initializeApp(  );


// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);

// import { MessagingService } from './shared/services/messaging/messagging.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    CommonModule,
    RouterModule,


  ],
  providers: [
    // NotificationService
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {


 

  constructor( ) {

    
   
    Notification.requestPermission().then(
      (notificationPermissions: NotificationPermission) => {
        if (notificationPermissions === "granted") {
          console.log("Granted");

          const messaging = getMessaging();
          getToken(messaging,{ vapidKey:'BNQprvrTFTKgkkFiFiOg_H9P4Ry6RxEPvl2EB1hyawKuVwlZ010gNqj2SLWidZGtyeuXD90GlZC0EwdrERPA1UM'}).then(data=>{
            console.log(data);
            
          })
        }
        if (notificationPermissions === "denied") {
          console.log("Denied");
        }
      });

  }


  ngOnInit(): void {}
}
