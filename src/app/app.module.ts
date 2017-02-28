import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CapitalizePipe } from './capitalize.pipe';
import { QuotesService } from '../services/quotes.service';
import { MyApp } from './app.component';
import { FavoritesPage } from '../pages/favorites/favorites';
import { LibraryPage } from '../pages/library/library';
import { QuotePage } from '../pages/quote/quote';
import { QuotesPage } from '../pages/quotes/quotes';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';


@NgModule({
  declarations: [
    CapitalizePipe,
    MyApp,
    FavoritesPage,
    LibraryPage,
    QuotePage,
    QuotesPage,
    SettingsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    LibraryPage,
    QuotePage,
    QuotesPage,
    SettingsPage,
    TabsPage
  ],
  providers: [QuotesService,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
