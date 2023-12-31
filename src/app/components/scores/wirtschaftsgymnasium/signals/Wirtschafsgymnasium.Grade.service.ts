import { Injectable, effect } from '@angular/core';
import { AchivedPercentageSignalService } from '../../../../signals/AchivedPercentageSignal.service';
import { WirtschaftsgymnasiumScooringService } from './Wirtschaftsgymnasium.Scooring.service';
import { GradeSignal } from '../../../../signals/GradeSignal.service';



@Injectable({
    providedIn: 'root'
})
export class WirtschafsgymnasiumGrade extends GradeSignal {

    /**
     *
     */
    constructor(private score: WirtschaftsgymnasiumScooringService, private percentage: AchivedPercentageSignalService) {
        super();

        effect(() => {
            let actualPercentage = this.percentage.Percentage();
            console.log(`The percentage for the is: ${actualPercentage}`);
            let grade = this.score.Scooring().filter(range => {
                return actualPercentage >= range.minPercentage && actualPercentage <= range.maxPercentage;
            });
            if (grade[0] != undefined) {
                console.log("Signaling new grade");
                this.Grade.set(grade[0]);
            }
        }, { allowSignalWrites: true });
    }

}
