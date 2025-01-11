// This sample application is using 9.22, make sure you are importing the same version

// import { initializeApp } from "firebase/app";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";


const firebaseApp = initializeApp({
  apiKey: "AIzaSyCIVYLJIapxu5b7QHU1MXDjrRn47ssk-H0",
  authDomain: "delivery-fffde.firebaseapp.com",
  projectId: "delivery-fffde",
  storageBucket: "delivery-fffde.firebasestorage.app",
  messagingSenderId: "244577228746",
  appId: "1:244577228746:web:b828118e21a2df1b596133",
  measurementId: "G-2QLPE6BHRE"
});

const messaging = getMessaging(firebaseApp);

getToken(messaging, { vapidKey: "BNQprvrTFTKgkkFiFiOg_H9P4Ry6RxEPvl2EB1hyawKuVwlZ010gNqj2SLWidZGtyeuXD90GlZC0EwdrERPA1UM" })
        .then((currentToken) => {
            if (currentToken) {
                console.log('client token', currentToken)
            } else {
                console.log('No registration token available. Request permission to generate one.');
            }
        }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
});