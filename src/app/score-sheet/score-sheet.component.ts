import { AfterViewInit, Component, Input, NgModule, OnInit, effect } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Score } from '../model/score';
import { Scooring } from '../model/Scooring';
import { MaximumPointsComponent } from './maximum-points/maximum-points.component';
import { AchievedPointsComponent } from './achievedPoints/achievedPoints.component';
import { AchivedPercentageSignalService } from './signals/AchivedPercentageSignal.service';
import { PercentageComponent } from './percentage/percentage.component';
import { SelectionModel } from '@angular/cdk/collections';
import { GradeSignal, ScooringService } from '../model/WirtschaftsgymnasiumScooring.service';
import { GradeComponent } from './grade/grade.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpBackend, HttpClient } from '@angular/common/http';

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
    MatGridListModule
  ]
})
export class ScoreSheetComponent {

  @Input()
  scoresSignal!: ScooringService;

  @Input()
  gradeSignal!: GradeSignal;

  dataSource: MatTableDataSource<Score> = new MatTableDataSource<Score>();
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
