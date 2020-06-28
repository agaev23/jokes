import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { JokesPageComponent } from './components/jokes-page/jokes-page.component';
import { SearchConfiguratorComponent } from './components/search-configurator/search-configurator.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { JokeItemComponent } from './components/joke-item/joke-item.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { DateAgoPipe } from './services/date-ago.pipe';
import { LayoutModule } from '@angular/cdk/layout';
@NgModule({
  declarations: [
    AppComponent,
    JokesPageComponent,
    SearchConfiguratorComponent,
    JokeItemComponent,
    FavoriteComponent,
    DateAgoPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSidenavModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
