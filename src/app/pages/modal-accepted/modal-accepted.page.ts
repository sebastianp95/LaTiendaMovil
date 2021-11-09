import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-accepted',
  templateUrl: './modal-accepted.page.html',
  styleUrls: ['./modal-accepted.page.scss'],
})
export class ModalAcceptedPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  modalDismiss() {
    this.modalCtrl.dismiss();
  }
}
