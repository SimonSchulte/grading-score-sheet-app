import { Injectable } from '@angular/core';
import { Sek2AllgemeinScooringService } from './Sek2.Allgemein.Scooring.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import {GradeSignal} from "../../../../../signals/GradeSignal.service";
import {AchivedPercentageSignalService} from "../../../../../signals/AchivedPercentageSignal.service";


@Injectable({
    providedIn: 'root'
})
export class Sek2AllgemeinGradeSignal extends GradeSignal {

    /**
     *
     */
    constructor(score: Sek2AllgemeinScooringService, percentage: AchivedPercentageSignalService, _snackBar: MatSnackBar) {
        super(score, percentage, _snackBar);
    }

}
