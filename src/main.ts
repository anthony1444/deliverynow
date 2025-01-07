import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import {} from '@angular/common/http';
import { provideServiceWorker } from '@angular/service-worker';
import { importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    environment.production ? provideServiceWorker('ngsw-worker.js') : []
  ]
}).catch(err => console.error(err));