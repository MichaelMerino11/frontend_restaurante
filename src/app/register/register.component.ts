import { Component } from '@angular/core';
import {AuthService} from '../servicios/login.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  emailError: string | null = null;

  private emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  constructor(private authService: AuthService, private router: Router) {
    //this.verData();
  }
  verificar(): boolean {
    this.emailError = this.emailRegex.test(this.email)
      ? null
      : 'Correo electrónico inválido';
    return !this.emailError;
  }
  onRegister() {
    if (this.verificar()) {
      this.register();
    }
  }

  register(): void {
    this.authService.register(this.email, this.password).subscribe(
      () => {
        console.log('Registro exitoso');
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Registro fallido:', error);
      }
    );
  }
}
