import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Score } from '../../../../model/score';
import { Scooring } from '../../../../model/Scooring';
import { ScooringService } from '../../Scooring.Service';

@Injectable({
    providedIn: 'root'
})
export class HoeherehandelsschuleScooringService extends ScooringService {


    constructor(private HttpClient: HttpClient) {
        super();

        new Scooring('/grading-score-sheet-app/assets/hoeherehandelsschule.csv', this.HttpClient).getScore().subscribe(
            data => this.Scooring.set(data)
        );
    }

}



