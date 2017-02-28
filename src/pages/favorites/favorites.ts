import { Component } from '@angular/core';
import {Quote} from "../../data/quote.interface";
import { QuotesService } from "../../services/quotes.service";
import {QuotePage} from "../quote/quote";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {

  private favoriteQuotes:Quote[];
  private quotePage = QuotePage;

  constructor(private quotesService:QuotesService) {}

  ionViewWillEnter(){
    this.favoriteQuotes = this.quotesService.getFavoriteQuotes();
  }

}
