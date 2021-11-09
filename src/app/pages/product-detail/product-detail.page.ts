import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  product = {
    title: 'Red Apple Crispy',
    subtitle: '1Kg',
    image: 'assets/images/apple.png',
    price: 4.99,
    quantity: 1,
  };

  disable = false;
  isFavorite: boolean;

  imageConfig = {
    centeredSlides: true,
    slidesPerView: 1,
  };

  constructor() {}

  ngOnInit() {}

  increase(item) {
    if (item.quantity === 1) {
      this.disable = false;
    }
    item.quantity++;
  }

  decrease(item) {
    if (item.quantity < 2) {
      this.disable = true;
    } else {
      item.quantity--;
    }
  }

  favorite() {
    this.isFavorite = !this.isFavorite;
  }
}
