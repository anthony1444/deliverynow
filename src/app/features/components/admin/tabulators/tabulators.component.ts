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
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { environment } from '../../../../../environments/environment';
import { ModalFormNeiborhoodComponent } from '../../../../modal-form-neiborhood/modal-form-neiborhood.component';
import { SelectCustomComponent } from '../../../../shared/components/select-custom/select-custom.component';
;

// barrio.interface.ts
export interface Barrio {
  Id: number;
  Name: string;
  Price: string | number;
  Idzone: number;
}

// zona.interface.ts
export interface Zona {
  Id: number;
  Name: string;
  Idtabulador: number;
  Neiborhood: Barrio[];
}

// tabulador.interface.ts
export interface Tabulador {
  Id: number;
  Name: string;
  Zones: Zona[];
}

@Component({
    selector: 'app-root',
    imports: [
        FormsModule, CommonModule,
        MatGridListModule, MatFormFieldModule,
        MatProgressSpinnerModule,
        SelectCustomComponent,
        MatButtonModule,
        MatSelectModule, MatIconModule,
        MatListModule,
        MatCardModule,],
    templateUrl: './tabulators.component.html',
    styleUrls: ['./tabulators.component.scss']
})
export class TabulatorsComponent {

  tabuladors: Tabulador[] = [];
  zonasDisponibles: Zona[] = [];
  barriosDisponibles: Barrio[] = [];
  selectedBarrio?: Barrio;
  loading: boolean = true;  // Variable para mostrar el spinner


  private tabuladoresUrl = `${environment.apiUrl}tabulators`;
  private apiKey = environment.apiKey;  // Reemplaza 'TU_CLAVE_AQUI' por tu clave real


  constructor(private http: HttpClient, public dialog: MatDialog) {
    // Cargar los datos de tabuladores
    this.getTabuladores().subscribe((tabuladores:Tabulador[]) => {
      this.tabuladors = tabuladores;
      this.loading = false;  // Oculta el spinner cuando los datos están cargados

    });
  }

  onTabuladorChange(event: any) {
    const tabuladorId = event.Id;
    this.zonasDisponibles = this.tabuladors.find(t => t.Id === tabuladorId)?.Zones || [];
    this.barriosDisponibles = []; // Limpiar los barrios cuando cambie el tabulador
  }

  onZonaChange(event: any) {
    const zonaId = event.Id;
    const selectedZona = this.zonasDisponibles.find(z => z.Id === zonaId);
    this.barriosDisponibles = selectedZona ? selectedZona.Neiborhood : [];
  }

  onBarrioSelect(barrio: Barrio) {
    this.selectedBarrio = barrio;
  }

  getTabuladores(): Observable<Tabulador[]> {
    return this.http.get<Tabulador[]>(this.tabuladoresUrl, { headers: this.getHeaders() });
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

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        // Aquí llamamos a la API para actualizar el barrio
        this.updateBarrio(result);
      }
    });
  }

  updateBarrio(barrio: Barrio): void {
    this.updateBarrioService(barrio).subscribe({
      next: (response:any) => {
        // Actualiza la lista de barrios disponibles con los cambios
        this.getTabuladores().subscribe((tabuladores:Tabulador[]) => {
          this.tabuladors = tabuladores;
          const selectedZona = this.zonasDisponibles.find(z => z.Id === barrio.Idzone);
          if (selectedZona) {
            const index = selectedZona.Neiborhood.findIndex(b => b.Id === barrio.Id);
            if (index !== -1) {
              selectedZona.Neiborhood[index] = barrio;
            }
          }
        });
      }
    });
  }

  updateBarrioService(barrio: Barrio): Observable<Barrio> {
    const url = `${environment.apiUrl}neiborhoods/${barrio.Id}`;
    const headers = this.getHeaders();
    return this.http.put<Barrio>(url, barrio, { headers })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error en la API:', error);
    return throwError('Algo salió mal; por favor intenta de nuevo más tarde.');
  }

}