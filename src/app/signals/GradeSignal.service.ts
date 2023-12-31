import { effect, signal } from '@angular/core';
import { Score } from '../model/score';
import { ScooringService } from '../components/scores/Scooring.Service';
import { AchivedPercentageSignalService } from './AchivedPercentageSignal.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InvalidPercentageAnnotatedComponent } from '../components/invalidpercentage.component';

export class GradeSignal {

    Grade = signal<Score>({
        name: "-",
        maxPercentage: 0,
        minPercentage: 0,
        points: 0
    }
    );

    constructor(protected score: ScooringService, protected percentage: AchivedPercentageSignalService, protected _snackBar: MatSnackBar) {
        effect(() => {

            if (percentage.Percentage() > 100) {
                console.warn("Detected invalid number of achieved points.");
                this.Grade.set({
                    name: "-",
                    maxPercentage: 0,
                    minPercentage: 0,
                    points: 0
                })
                this._snackBar.openFromComponent(InvalidPercentageAnnotatedComponent, {
                    duration: 5 * 1000,
                });

            }

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
