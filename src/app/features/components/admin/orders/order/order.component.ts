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
import { Barrio, Tabulador, Zona } from '../../tabulators/tabulators.component';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';
import { SelectCustomComponent } from '../../../../../shared/components/select-custom/select-custom.component';
import { NotificationService } from '../../../../../shared/services/notification/notification.service';

@Component({
    selector: 'app-order',
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
        MatCardModule,
        SelectCustomComponent
    ],
    styleUrl: './order.component.scss'
})
export class OrderComponent {

  orderForm: FormGroup = new FormGroup({
    totalAmount: new FormControl(),
    shippingAddress: new FormControl(),
    idNeiborhood: new FormControl(),
    customerName:new FormControl()
  });

  tabuladors: Tabulador[] = [];
  zonasDisponibles: Zona[] = [];
  barriosDisponibles: Barrio[] = [];
  selectedBarrio?: Barrio;
  loading: boolean = true;  // Variable para mostrar el spinner
  private tabuladoresUrl = `${environment.apiUrl}tabulators`;
  private apiKey = environment.apiKey;  // Reemplaza 'TU_CLAVE_AQUI' por tu clave real



  constructor(private fb: FormBuilder, private orderService: OrderService, public http: HttpClient, private notificationService: NotificationService) {

  }

  ngOnInit(): void {


   
  }

  getTabuladores(): Observable<Tabulador[]> {
    return this.http.get<Tabulador[]>(this.tabuladoresUrl, { headers: this.getHeaders() });
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'x-functions-key': this.apiKey
    });
  }

  submitOrder() {
    const iduser = JSON.parse(localStorage.getItem('auth') ?? '').user.id;
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
        customerName: this.orderForm.value.customerName,
        idNeiborhood:this.orderForm.value.idNeiborhood,
        delivererId: this.orderForm.value.delivererId,
        iduser:iduser,
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


  onBarrioChange(event: any) {
    const barrioId = event.Id;
    const selectedBarrio = this.barriosDisponibles.find(z => z.Id === barrioId);
    this.orderForm.get('idNeiborhood')?.setValue(selectedBarrio?.Id);
    this.orderForm.get('totalAmount')?.setValue(selectedBarrio?.Price);
    

  }

  onBarrioSelect(barrio: Barrio) {
    this.selectedBarrio = barrio;
  }

}
