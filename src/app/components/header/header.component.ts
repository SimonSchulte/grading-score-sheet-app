import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SelectedScoringSignal } from '../../model/WirtschaftsgymnasiumScooring.service';

@Component({
  standalone: true,
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary"> 
      <mat-toolbar-row>
        <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
          <mat-icon>menu</mat-icon>
        </button>
        <span>Notenspicker</span>
    </mat-toolbar-row>
    <mat-toolbar-row >
      <span>{{selectedScoring.name()}}</span>
      <span class="example-spacer"></span>
    </mat-toolbar-row>
  </mat-toolbar>
  `,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule]
})
export class HeaderComponent implements OnInit {

  constructor(public selectedScoring: SelectedScoringSignal) { }

  ngOnInit() {
  }

}
