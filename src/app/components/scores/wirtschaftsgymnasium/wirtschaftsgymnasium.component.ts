import { Component, OnInit, effect } from '@angular/core';
import { Score } from '../../../model/score';
import { ScoreSheetComponent } from '../../../score-sheet/score-sheet.component';
import { SelectedScoringSignal, WirtschafsgymnasiumGrade, WirtschaftsgymnasiumScooringService } from '../../../model/WirtschaftsgymnasiumScooring.service';

import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  standalone: true,
  selector: 'app-wirtschaftsgymnasium',
  template: `
    <app-score-sheet [scoresSignal]=wirtschaftsgymansium [gradeSignal]="wirtschaftsgymnasiumGrade"></app-score-sheet>
  `,
  imports: [ScoreSheetComponent, MatToolbarModule]
})
export class WirtschaftsgymnasiumComponent implements OnInit {

  Scores!: Array<Score>;

  constructor(public wirtschaftsgymansium: WirtschaftsgymnasiumScooringService,
    public wirtschaftsgymnasiumGrade: WirtschafsgymnasiumGrade,
    selectedScoring: SelectedScoringSignal) {

    selectedScoring.name.set("WYG | Wirtschaftsgymnasium")
  }

  ngOnInit() {
  }

}
