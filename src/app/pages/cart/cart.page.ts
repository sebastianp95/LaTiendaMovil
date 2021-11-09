import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ModalAcceptedPage } from "../modal-accepted/modal-accepted.page";
import { CartService } from "./cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "cart.page.html",
  styleUrls: ["cart.page.scss"],
})
export class CartPage {
  cart;
  constructor(
    private modalCtrl: ModalController,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.cart = {
      products: this.cartService.getAllProducts(),
      subtotal: this.cartService.getSubtotal(),
      taxRate: this.cartService.getTaxRate(),
    };
  }
  ionViewWillEnter() {
    this.cart = {
      products: this.cartService.getAllProducts(),
      subtotal: this.cartService.getSubtotal(),
      taxRate: this.cartService.getTaxRate(),
    };
  }

  async openModalAccepted() {
    const modal = await this.modalCtrl.create({
      component: ModalAcceptedPage,
      id: "ModalAccepted",
    });
    return await modal.present();
  }
}
