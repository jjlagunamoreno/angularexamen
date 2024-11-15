import { Component } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public nombre: string = '';
  public email: string = '';
  public password: string = '';
  public successMessage: string | null = null;
  public errorMessage: string | null = null;

  constructor(private serviceCubos: ServiceCubos) { }

  async register(): Promise<void> {
    try {
      const response = await this.serviceCubos.registrarUsuario({
        nombre: this.nombre,
        email: this.email,
        pass: this.password
      });
      console.log('Usuario registrado:', response);
      this.successMessage = 'Usuario registrado con éxito.';
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      this.errorMessage = 'No se pudo completar el registro.';
    }
  }
}
