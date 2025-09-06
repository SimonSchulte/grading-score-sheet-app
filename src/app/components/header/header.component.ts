import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SelectedScoringSignal } from '../../signals/SelectedScoringSignal.service';

import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
         <button mat-button [matMenuTriggerFor]="menu">
          <mat-icon>menu</mat-icon>
        </button>
        <span>Notenspicker</span>
    </mat-toolbar-row>
    <mat-toolbar-row >
      <span>{{selectedScoring.name()}}</span>
      <span class="example-spacer"></span>
    </mat-toolbar-row>

      <mat-menu #menu="matMenu">
        <button mat-menu-item (click)="navigate('Sek1Politik')">SeK I - Politik</button>
        <button mat-menu-item (click)="navigate('SeK2Allgemein')">SeK 2 - Allgemein</button>
      </mat-menu>

  </mat-toolbar>
  `,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule]
})
export class HeaderComponent implements OnInit {

  constructor(public selectedScoring: SelectedScoringSignal, private router: Router) { }

  ngOnInit() {
  }


  navigate(route: string) {
    console.log("Navigation to " + route)
    this.router.navigate(['/' + route]);
  }


}
