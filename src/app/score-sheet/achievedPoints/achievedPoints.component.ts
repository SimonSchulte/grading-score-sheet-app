import { Component, OnInit, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { AchivedPointsSignalService } from '../../signals/AchivedPointsSignal.service';

@Component({
  standalone: true,
  selector: 'app-achievedPoints',
  template: `
    <mat-form-field class="example-full-width">
      <mat-label>Erreichte Punkte</mat-label>
      <input matInput [value]="achievedPoints.achievedPoints()" type="number" #achievedPointsField
        (input)="achievedPoints.achievedPoints.set(achievedPointsField.valueAsNumber)" [pattern]="integerPattern">
  </mat-form-field>
  `,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class AchievedPointsComponent implements OnInit {
  integerPattern = '^[0-9]*$';
  constructor(public achievedPoints: AchivedPointsSignalService) { }

  ngOnInit() {
  }

}
