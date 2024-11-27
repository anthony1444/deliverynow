import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
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
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: 'login.component.scss',
})
export class LoginComponent {
  username: FormControl = new FormControl('johndoe');
  password: FormControl = new FormControl('hashed_password_123');
  data: any | null;

  constructor(public authService: AuthService) {}
  sigIn() {
    this.authService
      .login({ username: this.username.value, password: this.password.value })
      .subscribe((token: any) => {
        this.data = token;
      });
    console.table(this.data);
    if (this.data) {
      localStorage.setItem('serviExpressAuthToken', this.data);
    } else {
      alert('El aceso ap api continua restringido');
    }
  }
}
