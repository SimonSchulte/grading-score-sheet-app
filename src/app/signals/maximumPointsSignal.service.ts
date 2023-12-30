import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class MaximumPointsSignalService {


    public maximumPoints = signal(100);

    constructor() { }

}



