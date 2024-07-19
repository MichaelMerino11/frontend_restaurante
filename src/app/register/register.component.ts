import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  onRegister() {
    // Aquí iría la lógica para registrarse
    console.log('Registrarse con', this.name, this.email, this.password);
  }
}
