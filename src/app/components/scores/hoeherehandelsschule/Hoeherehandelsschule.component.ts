import { HoeherehandelsschuleScooringService } from './signals/Hoeherehandelsschule.Scooring.service';
import { Component, OnInit } from '@angular/core';
import { Score } from '../../../model/score';
import { ScoreSheetComponent } from '../../../score-sheet/score-sheet.component';
import { SelectedScoringSignal } from '../../../signals/SelectedScoringSignal.service';
import { WirtschafsgymnasiumGrade } from './signals/Hoeherehandelsschule.Grade.service';

@Component({
  standalone: true,
  selector: 'app-hoeherehandelsschule',
  template: `
    <app-score-sheet [scoresSignal]=scooring [gradeSignal]=grade></app-score-sheet>
  `,
  imports: [ScoreSheetComponent]
})
export class HoeherehandelsschuleComponent implements OnInit {

  Scores!: Array<Score>;

  constructor(public scooring: HoeherehandelsschuleScooringService,
    public grade: WirtschafsgymnasiumGrade,
    selectedScoring: SelectedScoringSignal) {

    selectedScoring.name.set("HöHa | Höhrere Handelsschule")
  }

  ngOnInit() {
  }

}
