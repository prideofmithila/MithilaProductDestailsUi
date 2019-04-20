import { Routes} from '@angular/router'
import { CarouselPanelComponent } from './home/carousel-panel/carousel-panel.component';
import { AboutComponent } from './About/about/about.component';

export const appRoutes : Routes = [
    {path: 'Home', component: CarouselPanelComponent},
    {path: 'About', component: AboutComponent},  // events/1 or //events/foo
    { path: '', redirectTo: '/Home', pathMatch: 'full' } // default path where pathMatch can accept prefix or full
]