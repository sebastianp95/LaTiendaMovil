import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FiltersPage } from '../filters/filters.page';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.page.html',
  styleUrls: ['./category-listing.page.scss'],
})
export class CategoryListingPage implements OnInit {

  products = [
    {
      title: 'Red Apple',
      subtitle: '1Kg',
      image: 'assets/images/apple.png',
      price: 4.99,
      inCart: false
    },
    {
      title: 'Ranch Eggs',
      subtitle: '12pcs',
      image: 'assets/images/eggs.png',
      price: 0.29,
      inCart: false
    },
    {
      title: 'Chicken',
      subtitle: '1Kg',
      image: 'assets/images/chicken.png',
      price: 1.99,
      inCart: false
    },
    {
      title: 'Waiyu Beef',
      subtitle: '1Kg',
      image: 'assets/images/meat.png',
      price: 24.99,
      inCart: false
    }
  ];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async openFilter() {
    const modal = await this.modalCtrl.create({
      component: FiltersPage,
      id: 'ModalFilter',
    });
    return await modal.present();
  }

}
