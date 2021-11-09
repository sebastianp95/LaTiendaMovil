import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cart = {
    products: [
      {
        title: "Red Apple",
        subtitle: "1Kg",
        image: "assets/images/apple.png",
        price: 4.99,
        quantity: 1,
      },
      {
        title: "Ranch Eggs",
        subtitle: "12pcs",
        image: "assets/images/eggs.png",
        price: 0.29,
        quantity: 1,
      },
      {
        title: "Chicken",
        subtitle: "1Kg",
        image: "assets/images/chicken.png",
        price: 1.99,
        quantity: 1,
      },
      {
        title: "Waiyu Beef",
        subtitle: "1Kg",
        image: "assets/images/meat.png",
        price: 24.99,
        quantity: 1,
      },
    ],
    subtotal: 244,
    taxRate: 12,
  };

  constructor() {}

  getAllProducts() {
    return [...this.cart.products];
  }

  getSubtotal() {
    return this.cart.subtotal;
  }

  getTaxRate() {
    return this.cart.taxRate;
  }

  addItem(item) {
    this.cart.products.push(item);
    console.log(this.getAllProducts());
  }
}
