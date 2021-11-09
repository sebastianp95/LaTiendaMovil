import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CartService } from "../cart/cart.service";

@Component({
  selector: "app-shop",
  templateUrl: "shop.page.html",
  styleUrls: ["shop.page.scss"],
})
export class ShopPage {
  slideConfig = {
    spaceBetween: 1,
    slidesPerView: 2.2,
  };

  groupConfig = {
    spaceBetween: 1,
    slidesPerView: 1.3,
  };

  logo = {
    image: "assets/images/logooo.PNG",
  };

  groups = [
    {
      image: "assets/images/product-group-1.png",
      group: "Rices",
      color: "red",
    },
    {
      image: "assets/images/product-group-2.png",
      group: "Beans",
      color: "green",
    },
  ];

  products = [
    {
      title: "Red Apple",
      subtitle: "1Kg",
      image: "assets/images/apple.png",
      price: 4.99,
      inCart: false,
    },
    {
      title: "Ranch Eggs",
      subtitle: "12pcs",
      image: "assets/images/eggs.png",
      price: 0.29,
      inCart: false,
    },
    {
      title: "Chicken",
      subtitle: "1Kg",
      image: "assets/images/chicken.png",
      price: 1.99,
      inCart: false,
    },
    {
      title: "Waiyu Beef",
      subtitle: "1Kg",
      image: "assets/images/meat.png",
      price: 24.99,
      inCart: false,
    },
    {
      title: "Red Apple",
      subtitle: "1Kg",
      image: "assets/images/apple.png",
      price: 4.99,
      inCart: false,
    },
    {
      title: "Ranch Eggs",
      subtitle: "12pcs",
      image: "assets/images/eggs.png",
      price: 0.29,
      inCart: false,
    },
    {
      title: "Chicken",
      subtitle: "1Kg",
      image: "assets/images/chicken.png",
      price: 1.99,
      inCart: false,
    },
    {
      title: "Waiyu Beef",
      subtitle: "1Kg",
      image: "assets/images/meat.png",
      price: 24.99,
      inCart: false,
    },
  ];

  constructor(private cartService: CartService) {}

  addToCart() {}
}
