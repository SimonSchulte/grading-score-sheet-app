import { Component, Input, effect } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Score } from '../model/score';
import { MaximumPointsComponent } from './maximum-points/maximum-points.component';
import { AchievedPointsComponent } from './achievedPoints/achievedPoints.component';
import { PercentageComponent } from './percentage/percentage.component';
import { GradeComponent } from './grade/grade.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClient } from '@angular/common/http';
import { GradePointsComponent } from './gradePoints/gradePoints.component';
import { GradeSignal } from '../signals/GradeSignal.service';
import { ScooringService } from '../components/scores/wirtschaftsgymnasium/signals/Wirtschaftsgymnasium.Scooring.service';

@Component({
  standalone: true,
  selector: 'app-score-sheet',
  templateUrl: './score-sheet.component.html',
  imports: [
    MatTableModule,
    MaximumPointsComponent,
    AchievedPointsComponent,
    PercentageComponent,
    GradeComponent,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    GradePointsComponent
  ]
})
export class ScoreSheetComponent {

  @Input()
  scoresSignal!: ScooringService;

  @Input()
  gradeSignal!: GradeSignal;

  data: Score[] = [];
  displayedColumns: string[] = ['minPercentage', 'maxPercentage', 'name', 'points'];
  panelOpenState = false;

  constructor(private httpClient: HttpClient) {
    effect(() => {
      this.data = this.scoresSignal.Scooring();
    })

  }

  ngOnInit() {

  }

}
