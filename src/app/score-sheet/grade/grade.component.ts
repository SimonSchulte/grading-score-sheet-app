import { Component, Input, OnInit, signal } from '@angular/core';
import { GradeSignal } from '../../model/WirtschaftsgymnasiumScooring.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  standalone: true,
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class GradeComponent implements OnInit {

  @Input() gradeSignal!: GradeSignal;

  constructor() { }

  ngOnInit() {
  }

}
