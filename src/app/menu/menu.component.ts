import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface MenuItem {
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [
    { name: 'Makis', description: 'Rollos de sushi envueltos en alga.', price: 5.99, image: 'sushi1.jpg', quantity: 1 },
    { name: 'Uramakis', description: 'Rollos de sushi con arroz por fuera.', price: 6.99, image: 'sushi2.jpg', quantity: 1 },
    { name: 'Nigiris', description: 'Bolas de arroz con pescado encima.', price: 7.99, image: 'sushi3.jpg', quantity: 1 },
    { name: 'Gunkan', description: 'Sushi envuelto en alga con ingredientes encima.', price: 8.99, image: 'sushi4.jpg', quantity: 1 },
    { name: 'Temaki', description: 'Conos de alga rellenos de arroz y otros ingredientes.', price: 5.99, image: 'sushi5.jpg', quantity: 1 },
    { name: 'Oshi sushi', description: 'Sushi prensado en una caja.', price: 9.99, image: 'sushi6.jpg', quantity: 1 },
    { name: 'Onigiri', description: 'Bolas de arroz rellenas y envueltas en alga.', price: 4.99, image: 'sushi7.jpg', quantity: 1 },
  ];

  total: number = 0;
  cartItems: MenuItem[] = [];
  isModalOpen: boolean = false;
  userEmail: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (this.isBrowser()) {
      this.userEmail = localStorage.getItem('email');
    }
  }

  addToCart(item: MenuItem): void {
    this.total += item.price * item.quantity;
    this.cartItems.push({ ...item });
    console.log(`Añadido ${item.quantity} x ${item.name} al carrito. Total: ${this.total}`);
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
