import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onLogin() {
    // Aquí iría la lógica para iniciar sesión
    console.log('Iniciar sesión con', this.email, this.password);
  }
}
