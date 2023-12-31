import { AchivedPercentageSignalService } from '../../signals/AchivedPercentageSignal.service';

import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-percentage',
  template: `
  <mat-form-field class="example-full-width">
    <mat-label>Prozent</mat-label>
    <input matInput [value]="achievedPercentage.Percentage()" readonly="true" type="number">
  </mat-form-field>
  `,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class PercentageComponent implements OnInit {

  constructor(public achievedPercentage: AchivedPercentageSignalService) { }

  ngOnInit() {
  }

}
