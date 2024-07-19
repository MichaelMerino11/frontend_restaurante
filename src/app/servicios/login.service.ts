import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://3.147.75.62:3000/api/v1';

  constructor(private http: HttpClient) {}

  register(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, { email, password });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(response => {
        this.saveToken(response.token, email);
      })
    );
  }

  updateUser(id: string, email: string, password: string): Observable<User> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.put<User>(`${this.apiUrl}/usuarios/${id}`, { email, password }, { headers });
  }

  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('email');
    }
  }

  getToken(): string | null {
    if (this.isBrowser()) {
      return localStorage.getItem('authToken');
    }
    return null;
  }

  getEmail(): string | null {
    if (this.isBrowser()) {
      return localStorage.getItem('email');
    }
    return null;
  }

  saveToken(token: string, email: string): void {
    if (this.isBrowser()) {
      localStorage.setItem('authToken', token);
      localStorage.setItem('email', email);
    }
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
