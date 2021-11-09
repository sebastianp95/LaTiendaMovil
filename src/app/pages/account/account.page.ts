import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuController } from "@ionic/angular";

@Component({
  selector: "app-account",
  templateUrl: "./account.page.html",
  styleUrls: ["./account.page.scss"],
})
export class AccountPage implements OnInit {
  menu = [
    {
      icon: "cart-outline",
      title: "My Shopping Cart",
      route: "cart",
    },
    {
      icon: "document-outline",
      title: "My Orders",
    },
    {
      icon: "map-outline",
      title: "My Addresses",
    },
    {
      icon: "card-outline",
      title: "My Payments Methods",
    },
    {
      icon: "settings-outline",
      title: "App Settings",
    },
  ];

  constructor(private router: Router, private menuCtrl: MenuController) {}

  ngOnInit() {}
  navigate(item) {
    console.log(item);
    this.router.navigate(["/tabs", item]);
    this.menuCtrl.close();
  }

  signOut() {
    this.router.navigate(["/onboarding"]);
  }
}
