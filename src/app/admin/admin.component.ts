import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component,OnInit } from '@angular/core';
import {MeseroService}from '../servicios/mesero.service'
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './admin.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent implements OnInit {
  meseros: any[] = [];

  constructor(private meseroService: MeseroService) {}

  ngOnInit(): void {
    this.fetchMeseros();
  }

  fetchMeseros(): void {
    this.meseroService.getMeseros().subscribe(
      data => {
        console.log("llegan datos")
        this.meseros = data;
        console.log(data);
      },
      error => {
        console.error('Error fetching meseros:', error);
      }
    );
  }

  deleteMesero(id: string): void {
    alert("Esta seguro que quiere eliminar");
    this.meseroService.deleteMesero(id).subscribe(
      () => {
        this.meseros = this.meseros.filter(mesero => mesero._id !== id);
      },
      error => {
        console.error('Error deleting mesero:', error);
      }
    );
  }
}
