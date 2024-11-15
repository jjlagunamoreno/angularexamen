import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceCubos } from '../../services/service.cubos';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public email = '';
  public password = '';
  public errorMessage = '';

  constructor(private serviceCubos: ServiceCubos, private router: Router) { }

  async login(): Promise<void> {
    try {
      const credentials = { email: this.email, password: this.password };
      const token = await this.serviceCubos.login(credentials);
      alert('Login exitoso. Redirigiendo a perfil...');
      this.router.navigate(['/perfil']);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      this.errorMessage = 'Credenciales incorrectas. Intenta nuevamente.';
    }
  }
}
