import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Route, RouterModule } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../auth.service';
import { AuthResponse } from '../../../interfaces/authresponse.interface';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    imports: [
        RouterModule,
        CommonModule,
        MatButtonModule,
        MatInputModule,
        MatGridListModule,
        MatFormFieldModule,
        MatLabel,
        MatCardModule,
        MatSidenavModule,
        ReactiveFormsModule,
    ],
    standalone:true,
    providers: [AuthService],
    templateUrl: './login.component.html',
    styleUrl: 'login.component.scss'
})
export class LoginComponent {
  username: FormControl = new FormControl('johndoe');
  password: FormControl = new FormControl('hashed_password_123');
  data: any | null;

  constructor(public authService: AuthService, public router:Router) {}
  sigIn() {
    this.authService
      .login({ username: this.username.value, password: this.password.value })
      .subscribe({
        next:(authResponse: AuthResponse) => {
          if (authResponse.token == '') {
            alert('Error en la autenticación')
            return;
          }
          this.router.navigate(['/tabulators'])
          localStorage.setItem('auth', JSON.stringify(authResponse))
        },
        error: ()=>{
          alert('Error en la autenticación')
        }
      });
    
  }
}
