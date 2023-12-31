import { MaximumPointsSignalService } from '../signals/maximumPointsSignal.service';
import { Component, OnInit, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-maximum-points',
  template: `
  <mat-form-field class="example-full-width">
    <mat-label>Maximale Punktzahl</mat-label>
    <input matInput [value]="maximumPoints.maximumPoints()" type="number" #maximumPointsField
      (input)="maximumPoints.maximumPoints.set(maximumPointsField.valueAsNumber)" [pattern]="integerPattern">
  </mat-form-field>
  `,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class MaximumPointsComponent implements OnInit {
  integerPattern = '^[0-9]*$';

  constructor(public maximumPoints: MaximumPointsSignalService) { }

  ngOnInit() {
  }

}
