import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  menu: any[] = [];
  selectedPlatos: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/api/menu').subscribe(data => {
      this.menu = data;
    });
  }

  togglePlato(plato: any): void {
    const index = this.selectedPlatos.indexOf(plato);
    if (index === -1) {
      this.selectedPlatos.push(plato);
    } else {
      this.selectedPlatos.splice(index, 1);
    }
  }

  submitPedido(): void {
    const pedido = this.selectedPlatos.map(plato => plato.nombre);
    this.http.post('http://localhost:3000/api/pedido', { pedido }).subscribe(response => {
      console.log('Pedido enviado:', response);
    });
  }
}
