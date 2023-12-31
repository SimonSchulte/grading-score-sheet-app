import { signal } from '@angular/core';
import { Score } from '../model/score';

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
