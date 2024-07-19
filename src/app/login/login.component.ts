import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
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
  onLogin() {
    if (this.verificar()) {
      this.login();
    }
  }
  login(): void {
    this.authService.login(this.email, this.password,).subscribe(
      () => {
        console.log('Login successful');
        this.router.navigate(['/admin']);
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }

  
}
