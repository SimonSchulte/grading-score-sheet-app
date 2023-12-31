import { Routes } from '@angular/router'; 
import { WirtschaftsgymnasiumComponent } from './components/scores/wirtschaftsgymnasium/wirtschaftsgymnasium.component';
import { HoeherehandelsschuleComponent } from './components/scores/hoeherehandelsschule/Hoeherehandelsschule.component';

export const routes: Routes = [

    // { path: '', component: WirtschaftsgymnasiumComponent},
    { path: 'wirtschaftsgymnasium', component: WirtschaftsgymnasiumComponent},
    { path: 'hoeherehandelsschule', component: HoeherehandelsschuleComponent},

];
