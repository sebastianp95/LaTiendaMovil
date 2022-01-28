import { Component, Input, OnInit } from "@angular/core";
import { CartItem } from "src/app/interfaces/interfaces";
import { CartService } from "src/app/pages/cart/cart.service";

@Component({
  selector: "app-cart-item",
  templateUrl: "./cart-item.component.html",
  styleUrls: ["./cart-item.component.scss"],
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItem;

  disable = false;

  constructor(private cartService: CartService) {}

  ngOnInit() {}

  increase(item) {
    if (item.quantity === 1) {
      this.disable = false;
    }
    item.quantity++;
  }

  decrease(item) {
    if (item.quantity < 2) {
      // this.disable = true;
      this.cartService.removeItem(this.item);
    } else {
      item.quantity--;
    }
  }
}
