import { HttpClient } from '@angular/common/http';
import { Injectable, effect, signal } from '@angular/core';
import { Score } from './score';
import { AchivedPercentageSignalService } from '../score-sheet/signals/AchivedPercentageSignal.service';
import { Scooring } from './Scooring';


export class ScooringService {

    Scooring = signal(new Array<Score>());
}

@Injectable({
    providedIn: 'root'
})
export class WirtschaftsgymnasiumScooringService extends ScooringService {


    constructor(private HttpClient: HttpClient) {
        super();

        new Scooring('/assets/wirtschaftsgymnasium.csv', this.HttpClient).getScore().subscribe(
            data => this.Scooring.set(data)
        );
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
            if (grade[0] != undefined) {
                console.log("Signaling new grade")
                this.Grade.set(grade[0]);
            }
        }, { allowSignalWrites: true })
    }

}




@Injectable({
    providedIn: 'root'
})
export class SelectedScoringSignal {

    name = signal("");
    constructor() {

    }

}

