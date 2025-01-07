// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';
// import { MatSelectChange, MatSelectModule } from '@angular/material/select';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatListModule } from '@angular/material/list';
// import { MatCardModule } from '@angular/material/card';
// import { MatIconModule } from '@angular/material/icon';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// import { catchError, Observable, throwError } from 'rxjs';
// import { MatDialog } from '@angular/material/dialog';
// import { MatButtonModule } from '@angular/material/button';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { ModalFormNeiborhoodComponent } from './modal-form-neiborhood/modal-form-neiborhood.component';
// import { MatInputModule } from '@angular/material/input';

// export interface Barrio {
//   Id: number;
//   Name: string;
//   Price: string | number;
//   Idzone: number;
// }

// export interface Zona {
//   Id: number;
//   Name: string;
//   Idtabulador: number;
//   Neiborhood: Barrio[]; // Relación de uno a muchos con Barrios
// }

// export interface Tabulador {
//   Id: number;
//   Name: string;
//   Zones: Zona[]; // Relación de uno a muchos con Zonas
// }


// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     RouterOutlet,
//     FormsModule,
//     CommonModule,
//     MatGridListModule,
//     MatFormFieldModule,
//     HttpClientModule,
//     MatButtonModule,
//     MatSelectModule,
//     MatIconModule,
//     MatListModule,
//     MatCardModule,
//     MatAutocompleteModule,
//     MatProgressSpinnerModule,
//     MatInputModule
//   ],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent {
//   tabuladors: Tabulador[] = [];
//   zonasDisponibles: Zona[] = [];
//   barriosDisponibles: Barrio[] = [];
//   selectedTabulador?: number | string;
//   selectedZona?: number;
//   selectedBarrio?: Barrio;
//   loading: boolean = true;

//   private tabuladoresUrl = 'https://microserviciouser.azurewebsites.net/api/tabulators';
//   private apiKey = 'DJl40Xh-wOlVqJHEEekC6Ys-XWucJgnCcdh2LluBn358AzFuXCKIfw=='; // Reemplaza por tu clave real
//   selectedTabuladorName: string | undefined;

//   constructor(private http: HttpClient, public dialog: MatDialog) {
//     this.getTabuladores().subscribe((tabuladores) => {
//       this.tabuladors = tabuladores;
//       this.loading = false; // Se oculta el spinner cuando los datos se cargan
//     });
//   }

//   onTabuladorChange(tabuladorId: number | string) {
//     let selectedTabulador;
//     if (typeof tabuladorId === 'number') {
//       this.selectedTabulador = tabuladorId;
//        selectedTabulador = this.tabuladors.find(t => t.Id === tabuladorId);
//     }
//     if (typeof tabuladorId === 'string') {
//       this.selectedTabulador = tabuladorId;
//        selectedTabulador = this.tabuladors.find(t => t.Name === tabuladorId);
//     }



//     this.selectedTabuladorName = selectedTabulador?.Name
//     this.zonasDisponibles = selectedTabulador ? selectedTabulador.Zones || [] : [];
//     this.barriosDisponibles = [];
//   }

//   onZonaChange(zonaId: number) {
//     this.selectedZona = zonaId;
//     const selectedZona = this.zonasDisponibles.find(z => z.Id === zonaId);
//     this.barriosDisponibles = selectedZona ? selectedZona.Neiborhood || [] : [];
//   }

//   onBarrioSelect(barrio: Barrio) {
//     this.selectedBarrio = barrio;
//   }

//   // Obtener tabuladores desde la API
//   getTabuladores(): Observable<Tabulador[]> {
//     return this.http.get<Tabulador[]>(this.tabuladoresUrl, { headers: this.getHeaders() });
//   }

//   private getHeaders(): HttpHeaders {
//     return new HttpHeaders({
//       'x-functions-key': this.apiKey,
//     });
//   }

//   // Abrir el modal de edición
//   openEditDialog(barrio: Barrio): void {
//     const dialogRef = this.dialog.open(ModalFormNeiborhoodComponent, {
//       width: '300px',
//       data: { ...barrio }, // Clonamos el objeto barrio
//     });

//     dialogRef.afterClosed().subscribe((result: Barrio) => {
//       if (result) {
//         this.updateBarrio(result);
//       }
//     });
//   }

//   updateBarrio(barrio: Barrio): void {
//     const index = this.barriosDisponibles.findIndex(b => b.Id === barrio.Id);
//     if (index !== -1) {
//       this.barriosDisponibles[index] = barrio;
//     }
//   }
// }

import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotificationService } from './shared/services/notification/notification.service';
import { HttpClient } from '@angular/common/http';
import { SwPush } from '@angular/service-worker';

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
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {


  opened = false;
  notificationStatus: string = '';


  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.checkNotificationStatus();
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
    if (Notification.permission === 'granted') {
      this.notificationStatus = 'Notifications are already enabled.';
    } else if (Notification.permission === 'denied') {
      this.notificationStatus =
        'Notifications are blocked. Please enable them in browser settings.';
    }
  }
}
