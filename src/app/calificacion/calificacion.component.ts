import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css'],
})
export class CalificacionComponent {
  calificacion: number = 5;
  comentario: string = '';

  constructor(private http: HttpClient) {}

  submitCalificacion(): void {
    const calificacionData = {
      calificacion: this.calificacion,
      comentario: this.comentario,
    };
    this.http
      .post('http://localhost:3000/api/calificacion', calificacionData)
      .subscribe((response) => {
        console.log('Calificación enviada:', response);
      });
  }
}
