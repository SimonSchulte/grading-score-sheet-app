import { AchivedPercentageSignalService } from './../../signals/AchivedPercentageSignal.service';

import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-percentage',
  templateUrl: './percentage.component.html',
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class PercentageComponent implements OnInit {

  constructor(public achievedPercentage: AchivedPercentageSignalService) { }

  ngOnInit() {
  }

}
