import {Routes} from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';
import {SeK1PolitikComponent} from "./components/scores/SeK1/SoWi/SeK1.Politik.component";
import {Sek2AllgemeinComponent} from "./components/scores/SeK2/Allgemein/Sek2.Allgemein.component";

export const routes: Routes = [

  {path: '', component: LandingComponent},
  {path: 'Sek1Politik', component: SeK1PolitikComponent},
  {path: 'SeK2Allgemein', component: Sek2AllgemeinComponent},

];
