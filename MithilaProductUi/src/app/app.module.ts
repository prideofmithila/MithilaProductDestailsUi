import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarouselPanelComponent } from './home/carousel-panel/carousel-panel.component';
import { FooterComponent } from './home/footer/footer.component';
import {KnowMithilaPaintingComponent} from './home/know-mithila-painting/know-mithila-painting.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselPanelComponent,
    FooterComponent,
    KnowMithilaPaintingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
