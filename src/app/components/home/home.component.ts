import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';
import { Cubo } from '../../models/cubo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public cubos: Cubo[] = []; // Array para almacenar los cubos

  constructor(private serviceCubos: ServiceCubos) { }

  ngOnInit(): void {
    this.loadCubos();
  }

  async loadCubos(): Promise<void> {
    try {
      this.cubos = await this.serviceCubos.getAllCubos();
      console.log('Cubos cargados:', this.cubos);
    } catch (error) {
      console.error('Error al cargar los cubos:', error);
    }
  }
}
