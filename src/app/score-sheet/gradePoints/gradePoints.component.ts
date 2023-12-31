import { Component, Input, OnInit, signal } from '@angular/core';
import { GradeSignal } from '../../model/WirtschaftsgymnasiumScooring.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  standalone: true,
  selector: 'app-grade-points',
  template: `
    <mat-form-field >
      <mat-label>Notenpunkte</mat-label>
      <input matInput class="grade-field" [value]="gradeSignal.Grade().points" type="number" readonly="true">
    </mat-form-field>
  `, 
  imports: [FormsModule, MatFormFieldModule, MatInputModule]
})
export class GradePointsComponent implements OnInit {

  @Input() gradeSignal!: GradeSignal;

  constructor() { }

  ngOnInit() {
  }

}
