import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
//import { AuthService } from '../auth.service';  // Adjust path as necessary

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',  // Reference the external HTML file
  styleUrls: ['./dashboard.component.css'],   // Reference the external CSS file
})
export class DashboardComponent {
  boxes = [3, 4, 5, 3, 3, 3, 3, 3, 5, 32, 4, 3, 3, 3, 3, 4, 3, 3, 4, 30, 62];

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    // Clear authentication state
    this.authService.logout();

    // Navigate back to the login screen
    this.router.navigate(['/login']);
  }
}
