import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButtonModule],
  template: `
    <h1 mat-dialog-title>Select an Item</h1>
    <div mat-dialog-content>
      <mat-list>
        <mat-list-item *ngFor="let item of data.items" (click)="selectItem(item)">
          {{ item.name }}
        </mat-list-item>
      </mat-list>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Close</button>
    </div>
  `
})
export class ModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { items: any[] }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  selectItem(item: any): void {
    this.dialogRef.close(item); // Devolver el item seleccionado
  }
}
