import { AchivedPercentageSignalService } from './../signals/AchivedPercentageSignal.service';
import { Component, Input, effect } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Score } from '../model/score';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClient } from '@angular/common/http';
import { GradeSignal } from '../signals/GradeSignal.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaximumPointsSignalService } from '../signals/MaximumPointsSignal.service';
import { ScooringService } from '../components/scores/Scooring.Service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AchivedPointsSignalService } from '../signals/AchivedPointsSignal.service';

@Component({
  standalone: true,
  selector: 'app-score-sheet',
  templateUrl: './score-sheet.component.html',
  imports: [
    MatTableModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class ScoreSheetComponent {

  integerPattern = '^[0-9]*$';

  @Input()
  scoresSignal!: ScooringService;

  @Input()
  gradeSignal!: GradeSignal;

  data: Score[] = [];
  displayedColumns: string[] = ['minPercentage', 'maxPercentage', 'name', 'points'];
  panelOpenState = false;
  gradingForm!: FormGroup;



  constructor(private fb: FormBuilder,
    private httpClient: HttpClient,
    public maximumPointsSignal: MaximumPointsSignalService,
    public achievedPoints: AchivedPointsSignalService,
    public achievedPercentage: AchivedPercentageSignalService,
    public maximumPoints: MaximumPointsSignalService) {
    effect(() => {
      this.data = this.scoresSignal.Scooring();
      this.gradingForm.setValidators(Validators.max(this.maximumPoints.maximumPoints()))
    });



  }

  ngOnInit() {
    this.gradingForm = new FormGroup({
      achievedPointsField: new FormControl(0) 
    });

  }

}
