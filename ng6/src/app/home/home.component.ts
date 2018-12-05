import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Carousel Images
  images: string[];
  //  `pictures/home-${Math.random()}.jpg`);

  constructor() {
  }

  ngOnInit() {
    this.images = ['home-1.jpg', 'home-2.jpg'];
  }
}
