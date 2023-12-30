import { Component, Input, NgModule, OnInit, effect } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Scooring, Score } from '../model/score';
import { MaximumPointsComponent } from './maximum-points/maximum-points.component';
import { AchievedPointsComponent } from './achievedPoints/achievedPoints.component';
import { AchivedPercentageSignalService } from '../signals/AchivedPercentageSignal.service';
import { PercentageComponent } from './percentage/percentage.component';
import { SelectionModel } from '@angular/cdk/collections';
import { GradeSignal } from '../model/WirtschaftsgymnasiumScooring.service';
import { GradeComponent } from './grade/grade.component';

@Component({
  standalone: true,
  selector: 'app-score-sheet',
  templateUrl: './score-sheet.component.html',
  imports: [
    MatTableModule,
    MaximumPointsComponent,
    AchievedPointsComponent,
    PercentageComponent,
    GradeComponent
  ]
})
export class ScoreSheetComponent implements OnInit {

  @Input()
  scores!: Array<Score>;

  @Input()
  gradeSignal!: GradeSignal;

  dataSource!: MatTableDataSource<Score>;
  displayedColumns: string[] = ['minPercentage', 'maxPercentage', 'name', 'points',];


  constructor(public percentage: AchivedPercentageSignalService) {
    effect(() => {

    });

  }

  ngOnInit() {
    console.log(this.scores);
    this.dataSource = new MatTableDataSource<Score>(this.scores);

  }

}
