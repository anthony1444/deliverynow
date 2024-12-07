import { Routes } from '@angular/router';

import { LoginComponent } from './features/components/login/login/login.component';
import { routes as adminRoutes } from './features/components/admin/admin.routes';


export const routes: Routes = [
    { path:'', children: adminRoutes},
    { path:'login', component: LoginComponent}
];
