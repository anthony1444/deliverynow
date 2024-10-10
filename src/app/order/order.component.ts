import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component'; // Importar el modal

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule],
  template: `
    <div class="background">
      <div class="fixed-container">
        <button mat-button class="custom-button" (click)="openModal(items1)">
          Open Modal 1
          <mat-icon class="arrow-icon">arrow_downward</mat-icon>
        </button>
        <button mat-button class="custom-button" (click)="openModal(items2)">
          Open Modal 2
          <mat-icon class="arrow-icon">arrow_downward</mat-icon>
        </button>
        <button mat-button class="custom-button" (click)="openModal(items3)">
          Open Modal 3
          <mat-icon class="arrow-icon">arrow_downward</mat-icon>
        </button>
      </div>
    </div>
  `,
  styles: [`
    /* Fondo azul claro para todo el componente */
    .background {
      // background-color: #e0f7fa; /* Azul claro */
      height: 100vh;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      background-image: url('https://motor.elpais.com/wp-content/uploads/2022/01/google-maps-22.jpg'); /* Cambia esta URL a la de tu imagen */

    }

    /* Contenedor de los botones con fondo blanco y borde redondeado */
    .fixed-container {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #ffffff;
      padding: 16px;
      border-top-left-radius: 24px;
      border-top-right-radius: 24px;
      box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height:40vh;
    }

    /* Botones personalizados */
    .custom-button {
      width: 100%;
      max-width: 300px;
      margin-bottom: 16px;
      justify-content: space-between; /* Alinear ícono a la derecha */
      color: #3f51b5; /* Color verde azulado */
      border: 1px solid #3f51b5; /* Borde del mismo color */
      background-color: transparent; /* Sin color de fondo */
      font-weight: bold;
      flex-flow: row-reverse;
      color:#3f51b5 !important;
    }
    .custom-button .mat-mdc-button-touch-target{
      color:blue !important;
    }

    /* Icono de flecha a la derecha */
    .arrow-icon {
      margin-left: auto;
    }

    /* Hover para los botones */
    .custom-button:hover {
      background-color: rgba(0, 121, 107, 0.1); /* Color de fondo suave al pasar el ratón */
    }
  `]
})
export class OrderComponent {
  items1 = [
    { id: 1, name: 'Item 1.1' },
    { id: 2, name: 'Item 1.2' },
  ];
  items2 = [
    { id: 3, name: 'Item 2.1' },
    { id: 4, name: 'Item 2.2' },
  ];
  items3 = [
    { id: 5, name: 'Item 3.1' },
    { id: 6, name: 'Item 3.2' },
  ];

  constructor(public dialog: MatDialog) {}

  openModal(items: any[]): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: { items }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Item seleccionado:', result); // Recibes el objeto seleccionado
      }
    });
  }
}
