import { Component, Input, OnInit } from "@angular/core";
import { Product } from "src/app/interfaces/interfaces";
import { CartService } from "src/app/pages/cart/cart.service";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;

  constructor(private cartService: CartService) {}

  ngOnInit() {}

  addToCart() {
    console.log("hello?");
    this.cartService.addItem(this.product);
  }
}
