import { Injectable, effect } from '@angular/core';
import { Sek1PolitikScooringService } from './Sek1.Politik.Scooring.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import {GradeSignal} from "../../../../../signals/GradeSignal.service";
import {AchivedPercentageSignalService} from "../../../../../signals/AchivedPercentageSignal.service";


@Injectable({
    providedIn: 'root'
})
export class Sek1PolitikGradeService extends GradeSignal {

    /**
     *
     */
    constructor(score: Sek1PolitikScooringService, percentage: AchivedPercentageSignalService, _snackBar: MatSnackBar) {
        super(score, percentage, _snackBar);
    }

}
