import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import {Quote} from "../../data/quote.interface";

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage {

  private quote:Quote;

  constructor(public navParams: NavParams){}

  ionViewWillEnter(){
    this.quote = this.navParams.data;
    console.log('From QuotePage',this.quote);
  }

}
