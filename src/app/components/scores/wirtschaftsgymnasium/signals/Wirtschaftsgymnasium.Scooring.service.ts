import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Scooring } from '../../../../model/Scooring';
import { ScooringService } from '../../Scooring.Service';


@Injectable({
    providedIn: 'root'
})
export class WirtschaftsgymnasiumScooringService extends ScooringService {


    constructor(private HttpClient: HttpClient) {
        super();

        new Scooring('/grading-score-sheet-app/assets/wirtschaftsgymnasium.csv', this.HttpClient).getScore().subscribe(
            data => this.Scooring.set(data)
        );
    }

}



