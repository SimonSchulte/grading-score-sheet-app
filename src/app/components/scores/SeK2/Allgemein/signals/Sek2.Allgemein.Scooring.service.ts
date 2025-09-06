import { Injectable, signal } from '@angular/core';
import {ScooringService} from "../../../Scooring.Service";

import { Observable, of } from 'rxjs';
import {Score} from "../../../../../model/score";

@Injectable({
    providedIn: 'root'
})
export class Sek2AllgemeinScooringService extends ScooringService {


    constructor() {
        super();

        new Sek2AllgemeinScore().getScore().subscribe(
            (data: Score[]) => this.Scooring.set(data)
        );
    }

}

export class Sek2AllgemeinScore {
  entries: Score[] = [
    { maxPercentage: 100, minPercentage: 95, name: 'Sehr gut +', points: 15 },
    { maxPercentage: 94, minPercentage: 90, name: 'Sehr gut', points: 14 },
    { maxPercentage: 89, minPercentage: 85, name: 'Sehr gut -', points: 13 },
    { maxPercentage: 84, minPercentage: 80, name: 'Gut +', points: 12 },
    { maxPercentage: 79, minPercentage: 75, name: 'Gut', points: 11 },
    { maxPercentage: 74, minPercentage: 70, name: 'Gut -', points: 10 },
    { maxPercentage: 69, minPercentage: 65, name: 'Befriedigend +', points: 9 },
    { maxPercentage: 64, minPercentage: 60, name: 'Befriedigend', points: 8 },
    { maxPercentage: 59, minPercentage: 55, name: 'Befriedigend -', points: 7 },
    { maxPercentage: 54, minPercentage: 50, name: 'Ausreichend +', points: 6 },
    { maxPercentage: 49, minPercentage: 45, name: 'Ausreichend', points: 5 },
    { maxPercentage: 44, minPercentage: 40, name: 'Ausreichend -', points: 4 },
    { maxPercentage: 39, minPercentage: 33, name: 'Mangelhaft +', points: 3 },
    { maxPercentage: 32, minPercentage: 27, name: 'Mangelhaft', points: 2 },
    { maxPercentage: 26, minPercentage: 20, name: 'Mangelhaft -', points: 1 },
    { maxPercentage: 19, minPercentage: 0, name: 'Ungenügend', points: 0 }
  ];

 public getScore(): Observable<Score[]> {
    return of(this.entries);
  }
}

