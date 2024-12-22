import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component'; // Importar el modal
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderService } from '../services/orders/order/order.service';
import { Order } from '../interfaces/Order';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-order',
  standalone: true,
  templateUrl: './order.component.html',
  imports: [
    MatButtonModule,
    MatIconModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatCardModule
  ],
  styleUrl:'./order.component.scss',
  
})
export class OrderComponent {

  orderForm: FormGroup = new FormGroup({
    totalAmount: new FormControl(),
    shippingAddress: new FormControl(),
  });

  constructor(private fb: FormBuilder, private orderService: OrderService) {

  }

  ngOnInit(): void { }

  submitOrder() {
    if (this.orderForm.valid) {
      const order: Order = {
        id: 0, // El backend debería manejar el ID automáticamente
        orderDate: this.orderForm.value.orderDate,
        shippedDate: this.orderForm.value.shippedDate,
        totalAmount: this.orderForm.value.totalAmount,
        status: this.orderForm.value.status,
        shippingAddress: this.orderForm.value.shippingAddress,
        createdAt: new Date(),
        updatedAt: new Date(),
        delivererId: this.orderForm.value.delivererId
      };

      this.orderService.createOrder(order).subscribe({
        next: (response: any) => {
          console.log('Orden creada exitosamente', response);
          alert('Orden creada exitosamente');
        },
        error: (error: any) => {
          console.error('Error al crear la orden', error);
          alert('Error al crear la orden');
        }
      });
    } else {
      alert('Por favor, completa los campos requeridos.');
    }
  }
}
