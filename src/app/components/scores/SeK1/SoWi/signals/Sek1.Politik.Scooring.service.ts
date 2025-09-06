import { Injectable } from '@angular/core';
import { ScooringService } from '../../../Scooring.Service';
import {Score} from "../../../../../model/score";
import {Observable, of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class Sek1PolitikScooringService extends ScooringService {


    constructor() {
        super();

        new Sek1PolitikScore().getScore().subscribe(
            data => this.Scooring.set(data)
        );
    }

}


export class Sek1PolitikScore {
  entries: Score[] = [
    { maxPercentage: 100, minPercentage: 100, name: 'Sehr gut +', points: 0 },
    { maxPercentage: 99, minPercentage: 95, name: 'Sehr gut', points: 0 },
    { maxPercentage: 94, minPercentage: 90, name: 'Sehr gut -', points: 0 },
    { maxPercentage: 89, minPercentage: 85, name: 'Gut +', points: 0 },
    { maxPercentage: 84, minPercentage: 80, name: 'Gut', points: 0 },
    { maxPercentage: 79, minPercentage: 75, name: 'Gut -', points: 0 },
    { maxPercentage: 75, minPercentage: 70, name: 'Befriedigend +', points: 0 },
    { maxPercentage: 70, minPercentage: 65, name: 'Befriedigend', points: 0 },
    { maxPercentage: 64, minPercentage: 60, name: 'Befriedigend -', points: 0 },
    { maxPercentage: 59, minPercentage: 55, name: 'Ausreichend +', points: 0 },
    { maxPercentage: 54, minPercentage: 50, name: 'Ausreichend', points: 0 },
    { maxPercentage: 49, minPercentage: 45, name: 'Ausreichend -', points: 0 },
    { maxPercentage: 44, minPercentage: 40, name: 'Mangelhaft +', points: 0 },
    { maxPercentage: 39, minPercentage: 30, name: 'Mangelhaft', points: 0 },
    { maxPercentage: 29, minPercentage: 20, name: 'Mangelhaft -', points: 0 },
    { maxPercentage: 19, minPercentage: 0, name: 'Ungenügend', points: 0 }
  ];

  public getScore(): Observable<Score[]> {
    return of(this.entries);
  }
}




