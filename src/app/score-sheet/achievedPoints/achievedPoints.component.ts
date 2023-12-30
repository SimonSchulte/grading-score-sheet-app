import { Component, OnInit, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { AchivedPointsSignalService } from '../signals/AchivedPointsSignal.service';

@Component({
  standalone: true,
  selector: 'app-achievedPoints',
  templateUrl: './achievedPoints.component.html',
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class AchievedPointsComponent implements OnInit {
  integerPattern = '^[0-9]*$';
  constructor(public achievedPoints: AchivedPointsSignalService) { }

  ngOnInit() {
  }

}
