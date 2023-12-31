import { Injectable, effect } from '@angular/core';
import { AchivedPercentageSignalService } from '../../../../signals/AchivedPercentageSignal.service';
import { WirtschaftsgymnasiumScooringService } from './Wirtschaftsgymnasium.Scooring.service';
import { GradeSignal } from '../../../../signals/GradeSignal.service';

import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
    providedIn: 'root'
})
export class WirtschafsgymnasiumGrade extends GradeSignal {

    /**
     *
     */
    constructor(score: WirtschaftsgymnasiumScooringService, percentage: AchivedPercentageSignalService, _snackBar: MatSnackBar) {
        super(score, percentage, _snackBar);
    }


}
