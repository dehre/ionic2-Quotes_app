import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import data from "../../data/quotes";

@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

}
