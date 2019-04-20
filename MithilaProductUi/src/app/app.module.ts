import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarouselPanelComponent } from './home/carousel-panel/carousel-panel.component';
import { FooterComponent } from './home/footer/footer.component';
import { AboutComponent } from './About/about/about.component';

import { appRoutes } from './routes';

// const routes: Routes = [
//   {path: 'Home', component: CarouselPanelComponent,KnowMithilaComponent},
//   {path: 'About', component: AboutComponent}
// ]
import {KnowMithilaPaintingComponent} from './home/know-mithila-painting/know-mithila-painting.component';
import { HomeComponentComponent } from './home/home-component/home-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselPanelComponent,
    FooterComponent,
    AboutComponent,
    KnowMithilaPaintingComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
