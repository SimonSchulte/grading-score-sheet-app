import { Component, OnInit, effect } from '@angular/core';
import { Scooring, Score, WirtschaftsgymasiumScooring } from '../model/score';
import { ScoreSheetComponent } from '../score-sheet/score-sheet.component';
import { WirtschafsgymnasiumGrade, WirtschaftsgymnasiumScooringService } from '../model/WirtschaftsgymnasiumScooring.service';

@Component({
  standalone: true,
  selector: 'app-wirtschaftsgymnasium',
  templateUrl: './wirtschaftsgymnasium.component.html',
  imports: [ScoreSheetComponent]
})
export class WirtschaftsgymnasiumComponent implements OnInit {

  Scores!: Array<Score>;

  constructor(wirtschaftsgymansium: WirtschaftsgymnasiumScooringService,
    public wirtschaftsgymnasiumGrade: WirtschafsgymnasiumGrade) {
    this.Scores = wirtschaftsgymansium.Scooring();

  }

  ngOnInit() {
  }

}
