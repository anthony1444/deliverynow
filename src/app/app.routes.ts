import { Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { TabulatorsComponent } from './tabulators/tabulators.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'order', component: OrderComponent },
    { path: 'tabulators', component: TabulatorsComponent },
    { path:'login', component: LoginComponent}
];
