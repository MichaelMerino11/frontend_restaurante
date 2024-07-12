import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'restaurante-app';
  isHomePage: boolean = false;
  images = [
    'sushi1.jpg',
    'sushi2.jpg',
    'sushi3.jpg',
    'sushi4.jpg',
    'sushi5.jpg',
    'sushi6.jpg',
    'sushi7.jpg',
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = event.url === '/';
      }
    });
  }
}
