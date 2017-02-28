import {Quote} from "../data/quote.interface";

export class QuotesService {
  private favoriteQuotes:Quote[] = [];

  getFavoriteQuotes(){
    return this.favoriteQuotes.slice();
  };

  addQuoteToFavorites(quote:Quote){
    this.favoriteQuotes.push(quote);
  }

  removeQuoteFromFavorites(quote:Quote){
    const position = this.favoriteQuotes.indexOf(quote);
    this.favoriteQuotes.splice(position,1);
  }
}
