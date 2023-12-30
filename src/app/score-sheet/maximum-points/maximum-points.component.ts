import { MaximumPointsSignalService } from '../signals/maximumPointsSignal.service';
import { Component, OnInit, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-maximum-points',
  templateUrl: './maximum-points.component.html',
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class MaximumPointsComponent implements OnInit {
  integerPattern = '^[0-9]*$';

  constructor(public maximumPoints: MaximumPointsSignalService) { }

  ngOnInit() {
  }

}
