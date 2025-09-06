import { Component, OnInit } from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {Sek2AllgemeinComponent} from "../scores/SeK2/Allgemein/Sek2.Allgemein.component";
import {SeK1PolitikComponent} from "../scores/SeK1/SoWi/SeK1.Politik.component";

@Component({
  selector: 'app-landing',
  template: `
    <div>
      <mat-tab-group>
        <mat-tab label="SeK I | Politik">
          <app-sek1-politik/>
        </mat-tab>
        <mat-tab label="SeK 2 | Algemein ">
          <app-sek2-allgemein/>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  imports: [
    MatTabGroup,
    Sek2AllgemeinComponent,
    SeK1PolitikComponent,
    MatTab
  ],
  standalone: true
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
