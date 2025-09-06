import {Sek1PolitikScooringService} from './signals/Sek1.Politik.Scooring.service';
import {Component, OnInit} from '@angular/core';
import {Sek1PolitikGradeService} from './signals/Sek1.Politik.Grade.service';
import {ScoreSheetComponent} from "../../../../score-sheet/score-sheet.component";
import {Score} from "../../../../model/score";
import {SelectedScoringSignal} from "../../../../signals/SelectedScoringSignal.service";

@Component({
    selector: 'app-sek1-politik',
    template: `
    <app-score-sheet [scoresSignal]=scooring [gradeSignal]=grade></app-score-sheet>
  `,
    imports: [ScoreSheetComponent]
})
export class SeK1PolitikComponent implements OnInit {

  Scores!: Array<Score>;

  constructor(public scooring: Sek1PolitikScooringService,
              public grade: Sek1PolitikGradeService,
              selectedScoring: SelectedScoringSignal) {

    selectedScoring.name.set("SeK I | Politik")
  }

  ngOnInit() {
  }

}
