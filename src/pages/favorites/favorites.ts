import { Component } from '@angular/core';
import {ModalController} from "ionic-angular";
import {Quote} from "../../data/quote.interface";
import { QuotesService } from "../../services/quotes.service";
import {QuotePage} from "../quote/quote";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {

  private quotes:Quote[];

  constructor(
    private quotesService:QuotesService,
    private modalCtrl:ModalController
  ){}

  ionViewWillEnter(){
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote:Quote){
    const modal = this.modalCtrl.create(QuotePage,{quote:quote});
    modal.present();
    modal.onDidDismiss((remove)=>{
      if(remove){
        this.quotesService.removeQuoteFromFavorites(quote);
        this.quotes = this.quotesService.getFavoriteQuotes();
      }
    });
  }

}
