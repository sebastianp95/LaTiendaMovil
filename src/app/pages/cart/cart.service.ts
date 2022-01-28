import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cart = {
    products: [
      {
        id: 1,
        title: "Red Apple",
        subtitle: "1Kg",
        image: "assets/images/apple.png",
        price: 4.99,
        quantity: 1,
      },
      {
        id: 2,
        title: "Ranch Eggs",
        subtitle: "12pcs",
        image: "assets/images/eggs.png",
        price: 0.29,
        quantity: 1,
      },
      {
        id: 3,
        title: "Chicken",
        subtitle: "1Kg",
        image: "assets/images/chicken.png",
        price: 1.99,
        quantity: 1,
      },
      // {
      //   id: 4,
      //   title: "Waiyu Beef",
      //   subtitle: "1Kg",
      //   image: "assets/images/meat.png",
      //   price: 24.99,
      //   quantity: 1,
      // },
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
    let inCart = false;
    this.cart.products.forEach((element) => {
      if (item.id === element.id) {
        element.quantity = element.quantity + 1;
        inCart = true;
      }
    });

    if (!inCart) {
      item.quantity = 1;
      this.cart.products.push(item);
    }
  }

  removeItem(item) {
    let index;

    this.cart.products.forEach((element) => {
      if (item.id === element.id) {
        index = this.cart.products.indexOf(element);
        console.log("index of", this.cart.products.indexOf(element));
      }
    });
    if (index > -1) {
      this.cart.products.splice(index, 1);
      this.cart.products = [...this.cart.products];
    }
  }
}
