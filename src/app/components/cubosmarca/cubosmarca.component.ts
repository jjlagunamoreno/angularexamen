import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceCubos } from '../../services/service.cubos';
import { Cubo } from '../../models/cubo';

@Component({
  selector: 'app-cubosmarca',
  templateUrl: './cubosmarca.component.html',
  styleUrl: './cubosmarca.component.css'
})
export class CubosmarcaComponent implements OnInit {
  public marca: string = ''; // Marca actual
  public cubos: Cubo[] = [];

  constructor(private route: ActivatedRoute, private serviceCubos: ServiceCubos) { }

  ngOnInit(): void {
    // Obtener el parámetro de la ruta
    this.route.params.subscribe(params => {
      this.marca = params['marca'];
      this.loadCubosByMarca(this.marca);
    });
  }

  async loadCubosByMarca(marca: string): Promise<void> {
    try {
      this.cubos = await this.serviceCubos.getCubosByMarca(marca);
      console.log(`Cubos de la marca ${marca}:`, this.cubos);
    } catch (error) {
      console.error('Error al cargar los cubos por marca:', error);
    }
  }
}