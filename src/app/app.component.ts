import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';


export interface Zona {
  id: number;
  nombre: string;
}

export interface Domicilio {
  id: number;
  valor: string;
  idZona: number;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule, MatGridListModule,  MatFormFieldModule,
    MatSelectModule,MatIconModule,
    MatListModule,
    MatCardModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DeliveryNowFront';

  zonas: Zona[] = [
    { id: 1, nombre: 'Zona Norte' },
    { id: 2, nombre: 'Zona Sur' },
    { id: 3, nombre: 'Zona Este' },
    { id: 4, nombre: 'Zona Oeste' },
  ];

  domicilios: Domicilio[] = [
    { id: 1, valor: 'Domicilio 1 valor: 10000', idZona: 1 },
    { id: 2, valor: 'Domicilio 2 valor: 12000', idZona: 2 },
    { id: 3, valor: 'Domicilio 3 valor: 10000', idZona: 1 },
    { id: 4, valor: 'Domicilio 4 valor: 11000', idZona: 3 },
    // Añade más domicilios según sea necesario
  ];

  zonaSeleccionada: number | null = null;
  domiciliosFiltrados: Domicilio[] = [];

  onZonaChange(): void {
    console.log(this.zonaSeleccionada);
    
    if (this.zonaSeleccionada !== null) {
      this.domiciliosFiltrados = this.domicilios.filter(d => d.idZona == this.zonaSeleccionada);
      console.log(this.domiciliosFiltrados);
      
    } else {
      this.domiciliosFiltrados = [];
    }
  }
}
