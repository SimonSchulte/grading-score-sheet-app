import { Component, OnInit } from '@angular/core';
import { Score } from '../../../model/score';
import { ScoreSheetComponent } from '../../../score-sheet/score-sheet.component';
import { WirtschaftsgymnasiumScooringService } from './signals/Wirtschaftsgymnasium.Scooring.service';
import { SelectedScoringSignal } from '../../../signals/SelectedScoringSignal.service';
import { WirtschafsgymnasiumGrade } from './signals/Wirtschafsgymnasium.Grade.service';

@Component({
  standalone: true,
  selector: 'app-wirtschaftsgymnasium',
  template: `
    <app-score-sheet [scoresSignal]=scoring [gradeSignal]=grade></app-score-sheet>
  `,
  imports: [ScoreSheetComponent]
})
export class WirtschaftsgymnasiumComponent implements OnInit {

  Scores!: Array<Score>;

  constructor(public scoring: WirtschaftsgymnasiumScooringService,
    public grade: WirtschafsgymnasiumGrade,
    selectedScoring: SelectedScoringSignal) {

    selectedScoring.name.set("WYG | Wirtschaftsgymnasium")
  }

  ngOnInit() {
  }

}
