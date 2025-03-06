import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5030/api/auth'; // .NET API base URL

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap((response) => {
        if (response.token) {
          localStorage.setItem('token', response.token); // Store JWT token
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('token'); // Clear JWT token
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken(); // Check if token exists
  }

  getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({ Authorization: `Bearer ${this.getToken()}` });
  }
}
