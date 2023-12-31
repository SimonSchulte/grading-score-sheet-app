import { Component, Input, OnInit, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { GradeSignal } from '../../signals/GradeSignal.service';

@Component({
  standalone: true,
  selector: 'app-grade',
  template: `
    <mat-form-field >
      <mat-label>Note</mat-label>
      <input matInput class="grade-field" [value]="gradeSignal.Grade().name" readonly="true">
    </mat-form-field>
  `, 
  imports: [FormsModule, MatFormFieldModule, MatInputModule]
})
export class GradeComponent implements OnInit {

  @Input() gradeSignal!: GradeSignal;

  constructor() { }

  ngOnInit() {
  }

}
