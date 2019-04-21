import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarouselPanelComponent } from './home/carousel-panel/carousel-panel.component';
import { FooterComponent } from './home/footer/footer.component';
import { AboutComponent } from './About/about/about.component';

import { appRoutes } from './routes';
import {ProductsService} from './Services/products.service';

// const routes: Routes = [
//   {path: 'Home', component: CarouselPanelComponent,KnowMithilaComponent},
//   {path: 'About', component: AboutComponent}
// ]
import {KnowMithilaPaintingComponent} from './home/know-mithila-painting/know-mithila-painting.component';
import { HomeComponentComponent } from './home/home-component/home-component.component';
import { ProductListComponent } from './shop/product-list/product-list.component';
import { ProductFilterComponent } from './shop/product-filter/product-filter.component';
import { ProductHomeComponent } from './shop/product-home/product-home.component';
import { NavigationBarComponent } from './home/navigation-bar/navigation-bar.component';
import { FeaturedProductComponent } from './home/featured-product/featured-product.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { SubscribeComponent } from './home/subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselPanelComponent,
    FooterComponent,
    AboutComponent,
    KnowMithilaPaintingComponent,
    HomeComponentComponent,
    ProductListComponent,
    ProductFilterComponent,
    ProductHomeComponent,
    NavigationBarComponent,
    FeaturedProductComponent,
    ContactUsComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
