import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SelectedScoringSignal } from '../../signals/SelectedScoringSignal.service';

import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <span>Der Notenspicker</span>
      </mat-toolbar-row>
    </mat-toolbar>
  `,
  standalone: true,
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
