import {Sek2AllgemeinScooringService} from './signals/Sek2.Allgemein.Scooring.service';
import {Component, OnInit} from '@angular/core';
import {Sek2AllgemeinGradeSignal} from './signals/Sek2.Allgemein.Grade.service';
import {ScoreSheetComponent} from "../../../../score-sheet/score-sheet.component";
import {Score} from "../../../../model/score";
import {SelectedScoringSignal} from "../../../../signals/SelectedScoringSignal.service";

@Component({
  standalone: true,
  selector: 'app-sek2-allgemein',
  template: `
    <app-score-sheet [scoresSignal]=scooring [gradeSignal]=grade></app-score-sheet>
  `,
  imports: [ScoreSheetComponent]
})
export class Sek2AllgemeinComponent implements OnInit {

  Scores!: Array<Score>;

  constructor(public scooring: Sek2AllgemeinScooringService,
              public grade: Sek2AllgemeinGradeSignal,
              selectedScoring: SelectedScoringSignal) {

    selectedScoring.name.set("SeK II  | Allgemein")
  }

  ngOnInit() {
  }

}
