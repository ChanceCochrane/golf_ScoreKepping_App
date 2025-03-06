import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule], // ✅ Import FormsModule here
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        this.router.navigate(['/dashboard']).then(success => {
          if (success) {
            console.log('Navigation successful!');
          } else {
            console.log('Navigation failed!');
          }
        });
        //window.location.href = '/dashboard';
      },
      error: () => {
        this.errorMessage = 'Invalid username or password';
      },
    });
  }
}
