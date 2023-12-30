import { Injectable, computed, effect, signal } from '@angular/core';
import { WirtschaftsgymasiumScooring, Score } from './score';
import { AchievedPointsComponent } from '../score-sheet/achievedPoints/achievedPoints.component';
import { AchivedPercentageSignalService } from '../signals/AchivedPercentageSignal.service';

@Injectable({
    providedIn: 'root'
})
export class WirtschaftsgymnasiumScooringService {

    Scooring = signal(new WirtschaftsgymasiumScooring().scores);

    constructor() {
    }

}



export class GradeSignal {

    Grade = signal<Score>({
        name: "-",
        maxPercentage: 0,
        minPercentage: 0,
        points: 0
    }
    );

    constructor() {
    }

}


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
            this.Grade.set(grade[0]);
        }, { allowSignalWrites: true })
    }

}

