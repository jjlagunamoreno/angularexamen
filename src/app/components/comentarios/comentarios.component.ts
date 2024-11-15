import { Component, Input, OnChanges } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';
import { Comentario } from '../../models/comentario';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnChanges {
  @Input() idCubo!: number;
  comentarios: Comentario[] = [];

  constructor(private service: ServiceCubos) { }

  ngOnChanges(): void {
    if (this.idCubo) {
      this.service.getComentariosCubo(this.idCubo).then((comentarios) => {
        this.comentarios = comentarios;
      });
    }
  }
}
