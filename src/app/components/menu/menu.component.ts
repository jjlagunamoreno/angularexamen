import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  public marcas: string[] = [];

  constructor(private serviceCubos: ServiceCubos) { }

  ngOnInit(): void {
    this.loadMarcas();
  }

  async loadMarcas(): Promise<void> {
    try {
      this.marcas = await this.serviceCubos.getMarcas();
      console.log('Marcas cargadas:', this.marcas);
    } catch (error) {
      console.error('Error al cargar las marcas:', error);
    }
  }
}
