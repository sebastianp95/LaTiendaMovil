import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: 'explore.page.html',
  styleUrls: ['explore.page.scss']
})
export class ExplorePage {

  categories = [
    {
      image: 'assets/images/bakery-category.png',
      category: 'Bakery & Snacks',
      color: 'red'
    },
    {
      image: 'assets/images/meats-category.png',
      category: 'Fresh Meats & Fish',
      color: 'orange'
    },
    {
      image: 'assets/images/fruit-category.png',
      category: 'Fruits & Vegetables',
      color: 'green'
    },
    {
      image: 'assets/images/oil-category.png',
      category: 'Cooking Oils & Sauces',
      color: 'magenta'
    }
  ];

  constructor(private router: Router) {}

  gotoCategory() {
    this.router.navigate(['/listing']);
  }
}
