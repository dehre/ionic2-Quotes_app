import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import {Quote} from "../../data/quote.interface";

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage {

  private person:string;
  private text:string;

  constructor(
    public navParams: NavParams,
    private viewCtrl:ViewController){}

  ionViewDidLoad(){
    let quote = this.navParams.get('quote');
    this.person = quote.person;
    this.text = quote.text;
    console.log('From QuotePage',this.person);
    console.log('From QuotePage',this.text);
  }

  onClose(){
    this.viewCtrl.dismiss();
  }

}
