import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ModalFormNeiborhoodComponent } from './modal-form-neiborhood/modal-form-neiborhood.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


// barrio.interface.ts
export interface Barrio {
  Id:number;
  Name: string;
  Price: string | number;
  Idzone: number
}
export interface Zona {
  Id: number;
  Name:string
  Idtabulador:number

}



// tabulador.interface.ts
export interface Tabulador {
  Id:number;
  Name: string;
}



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    FormsModule,CommonModule, 
    MatGridListModule,  MatFormFieldModule,HttpClientModule,
    MatButtonModule,
    MatSelectModule,MatIconModule,
    MatListModule,
    MatCardModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

    tabuladors:Tabulador[] = []
    zona:Zona[] = []
    barrio:Barrio[] = []


    zonasDisponibles: Zona[] = [];
  barriosDisponibles: Barrio[] = [];
  selectedBarrio?: Barrio;
  private tabuladoresUrl = 'https://microserviciouser.azurewebsites.net/api/tabulators';
  private zonasUrl = 'https://microserviciouser.azurewebsites.net/api/zones';
  private barriosUrl = 'https://microserviciouser.azurewebsites.net/api/neiborhoods';
  private apiKey = 'DJl40Xh-wOlVqJHEEekC6Ys-XWucJgnCcdh2LluBn358AzFuXCKIfw==';  // Reemplaza 'TU_CLAVE_AQUI' por tu clave real

  constructor(private http: HttpClient, public dialog: MatDialog) {
       // Cargar los datos de tabuladores, zonas y barrios
       this.getTabuladores().subscribe(tabuladores => {
        this.tabuladors = tabuladores;
      });
  
      this.getZonas().subscribe(zonas => {
        this.zona = zonas;
      });
  
      this.getBarrios().subscribe(barrios => {
        this.barrio = barrios;
      });

  }
  
  onTabuladorChange(event: MatSelectChange) {
    console.log("a");
    
    const tabuladorId = event.value;
    console.log(tabuladorId);
    
    this.zonasDisponibles = this.zona.filter(z => z.Idtabulador === tabuladorId);
    this.barriosDisponibles = []; // Limpiar los barrios cuando cambie el tabulador
  }
  onBarrioSelect(barrio: Barrio) {
    this.selectedBarrio = barrio;
  }

  onZonaChange(event: MatSelectChange) {
    const zonaId = event.value;
    console.log("zona",zonaId);
    
    this.barriosDisponibles = this.barrio.filter(b => b.Idzone === zonaId);
  }

  getTabuladores(): Observable<Tabulador[]> {
    return this.http.get<Tabulador[]>(this.tabuladoresUrl, { headers: this.getHeaders() });
  }

  getZonas(): Observable<Zona[]> {
    return this.http.get<Zona[]>(this.zonasUrl, { headers: this.getHeaders() });
  }

  getBarrios(): Observable<Barrio[]> {
    return this.http.get<Barrio[]>(this.barriosUrl,{ headers: this.getHeaders() });
  }
  

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'x-functions-key': this.apiKey
    });
  }

    // Abrir el modal de edición
    openEditDialog(barrio: Barrio): void {
      const dialogRef = this.dialog.open(ModalFormNeiborhoodComponent, {
        width: '300px',
        data: { ...barrio }  // Clonamos el objeto barrio
      });
  
      dialogRef.afterClosed().subscribe((result:any) => {
        if (result) {
          // Aquí llamamos a la API para actualizar el barrio
          this.updateBarrio(result);
        }
      });
    }

    updateBarrio(barrio: Barrio): void {
      this.updateBarrioService(barrio).subscribe({next:(response) => {
        // Actualiza la lista de barrios disponibles con los cambios

        this.getBarrios().subscribe(barrios => {
          this.barrio = barrios;
          const index = this.barriosDisponibles.findIndex(b => b.Id === barrio.Id);
          if (index !== -1) {
            this.barriosDisponibles[index] = barrio;
          }
        });
   
      }});
    }

    updateBarrioService(barrio: Barrio): Observable<Barrio> {
      const url = `https://microserviciouser.azurewebsites.net/api/neiborhoods/${barrio.Id}`;
      const headers = this.getHeaders();
      return this.http.put<Barrio>(url, barrio, { headers })
        .pipe(catchError(this.handleError));
    }
    
    private handleError(error: HttpErrorResponse) {
      console.error('Error en la API:', error);
      return throwError('Algo salió mal; por favor intenta de nuevo más tarde.');
    }

    


}
