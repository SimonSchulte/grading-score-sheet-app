import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Score } from '../../../../model/score';
import { Scooring } from '../../../../model/Scooring';


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



