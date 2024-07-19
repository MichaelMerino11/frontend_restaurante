import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  onRegister() {
    // Aquí iría la lógica para registrarse
    console.log('Registrarse con', this.email, this.password);
  }
}
