import { Routes } from '@angular/router'; 
import { HoeherehandelsschuleComponent } from './components/scores/hoeherehandelsschule/Hoeherehandelsschule.component';
import { WirtschaftsgymnasiumComponent } from './components/scores/wirtschaftsgymnasium/Wirtschaftsgymnasium.component';
import { LandingComponent } from './components/landing/landing.component';

export const routes: Routes = [

    { path: '', component: LandingComponent},
    { path: 'wirtschaftsgymnasium', component: WirtschaftsgymnasiumComponent},
    { path: 'hoeherehandelsschule', component: HoeherehandelsschuleComponent},

];
