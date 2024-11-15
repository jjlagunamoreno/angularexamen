import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceCubos } from '../../services/service.cubos';
import { Cubo } from '../../models/cubo';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  cubo!: Cubo;

  constructor(private route: ActivatedRoute, private service: ServiceCubos) { }

  ngOnInit(): void {
    const idCubo = this.route.snapshot.params['idcubo'];
    this.service.getCuboById(+idCubo).then((cubo) => (this.cubo = cubo));
  }
}
