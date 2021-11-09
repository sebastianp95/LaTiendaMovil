import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  menu = [
    {
      icon: "cart-outline",
      title: "My Shopping Cart",
    },
    {
      icon: "document-outline",
      title: "My Orders",
    },
    {
      icon: "person-outline",
      title: "My Account",
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
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
