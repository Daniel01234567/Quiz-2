import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocinaPage } from '../bocina/bocina';
import { LamparaPage } from '../lampara/lampara';
import { TelePage } from '../tele/tele';
import { SmartphonePage } from '../smartphone/smartphone';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Bocina = BocinaPage; 
Lampara = LamparaPage;
TV = TelePage;
Smart = SmartphonePage;
  constructor(public navCtrl: NavController) {

  }
Clickbocina() {
  this.navCtrl.push(this.Bocina);
}
Clicklampara() {
  this.navCtrl.push(this.Lampara);
}
Clicktele() {
  this.navCtrl.push(this.TV);
}
Clicksmartphone() {
  this.navCtrl.push(this.Smart);
}



}
