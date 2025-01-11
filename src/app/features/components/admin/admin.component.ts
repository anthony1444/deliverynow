import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './admin.routes';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        CommonModule,
        RouterOutlet
    ],
    standalone:true
})
export class AdminComponent {
  opened = false;
  navLinks = [
    { path: '/', label: 'Home' },
    { path: '/order', label: 'Pedidos' },
    { path: '/tabulators', label: 'Tabuladores' },
  ];
  constructor(public router:Router){
    
  }

  onNavItemClick(sidenav: MatSidenav,path: string): void {
    sidenav.close();
    this.router.navigate([path]);

  }
}
