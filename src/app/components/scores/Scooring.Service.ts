import { signal } from '@angular/core';
import { Score } from '../../model/score';



export class ScooringService {

    Scooring = signal(new Array<Score>());
}
