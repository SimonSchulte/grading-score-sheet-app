import { Component, OnInit, effect } from '@angular/core';
import { Scooring, Score, WirtschaftsgymasiumScooring } from '../../../model/score';
import { ScoreSheetComponent } from '../../../score-sheet/score-sheet.component';
import { SelectedScoringSignal, WirtschafsgymnasiumGrade, WirtschaftsgymnasiumScooringService } from '../../../model/WirtschaftsgymnasiumScooring.service';

import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  standalone: true,
  selector: 'app-wirtschaftsgymnasium',
  templateUrl: './wirtschaftsgymnasium.component.html',
  imports: [ScoreSheetComponent, MatToolbarModule]
})
export class WirtschaftsgymnasiumComponent implements OnInit {

  Scores!: Array<Score>;

  constructor(wirtschaftsgymansium: WirtschaftsgymnasiumScooringService,
    public wirtschaftsgymnasiumGrade: WirtschafsgymnasiumGrade,
    private selectedScoring: SelectedScoringSignal) {
    this.Scores = wirtschaftsgymansium.Scooring();

    selectedScoring.name.set("WYG | Wirtschaftsgymnasium")
  }

  ngOnInit() {
  }

}
