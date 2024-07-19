import { Component } from '@angular/core';
import { AuthService } from '../servicios/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isAuthenticated: boolean = true;

  constructor(private authService: AuthService) {
    this.checkAuthentication();
  }

  checkAuthentication(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  logout(): void {
    this.authService.logout();
    this.checkAuthentication(); // Actualiza el estado de autenticación después de cerrar sesión
  }
}
