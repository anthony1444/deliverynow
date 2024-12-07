import { Routes } from '@angular/router';
import { OrderComponent } from './orders/order/order.component';
import { TabulatorsComponent } from './tabulators/tabulators.component';
import { AdminComponent } from './admin.component';



export const routes: Routes = [ 
    { path: '', component:AdminComponent, children:[
        { path: 'order', loadComponent: ()=> import('./orders/order/order.component').then(c => c.OrderComponent) },
        { path: 'tabulators',loadComponent: ()=> import('./tabulators/tabulators.component').then(c=>c.TabulatorsComponent) },
        { path: '',loadComponent: ()=> import('./home/home.component').then(c=>c.HomeComponent) }
    ]}
];
