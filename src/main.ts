import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

import { appConfig } from './app/app.config';
import { environment } from './environments/environment';

bootstrapApplication(AppComponent, appConfig).then(() => {
  // Verificar si el Service Worker está registrado
  if (environment.production && 'serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('ngsw-worker.js')
      .then((registration) => {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch((error) => {
        console.error('Error al registrar el Service Worker:', error);
      });
  }
}).catch((err: any) => {
  console.error('Error al iniciar la aplicación:', err);
});;