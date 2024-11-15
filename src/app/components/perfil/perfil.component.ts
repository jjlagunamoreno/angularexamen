import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public user: { nombre: string; email: string } | null = null;

  constructor(private serviceCubos: ServiceCubos) { }

  async ngOnInit(): Promise<void> {
    try {
      this.user = await this.serviceCubos.getPerfilUsuario();
    } catch (error) {
      console.error('Error al obtener el perfil del usuario:', error);
    }
  }
}
