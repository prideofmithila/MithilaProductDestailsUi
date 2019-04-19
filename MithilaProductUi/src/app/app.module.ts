import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarouselPanelComponent } from './home/carousel-panel/carousel-panel.component';
import { FooterComponent } from './home/footer/footer.component';
import { AboutComponent } from './About/about/about.component';

const routes: Routes = [
  {path: 'Home', component: CarouselPanelComponent},
  {path: 'About', component: AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CarouselPanelComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
