import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarouselPanelComponent } from './home/carousel-panel/carousel-panel.component';
import { FooterComponent } from './home/footer/footer.component';
import { AboutComponent } from './About/about/about.component';

import { appRoutes } from './routes';

const routes: Routes = [
  {path: 'Home', component: CarouselPanelComponent},
  {path: 'About', component: AboutComponent}
]
import {KnowMithilaPaintingComponent} from './home/know-mithila-painting/know-mithila-painting.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselPanelComponent,
    FooterComponent,
    AboutComponent,
    KnowMithilaPaintingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
