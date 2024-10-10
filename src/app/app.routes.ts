import { Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { TabulatorsComponent } from './tabulators/tabulators.component';

export const routes: Routes = [
    { path: 'order', component: OrderComponent },
    { path: 'tabulators', component: TabulatorsComponent },
];
