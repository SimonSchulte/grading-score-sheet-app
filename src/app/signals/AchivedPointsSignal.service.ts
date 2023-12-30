import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class AchivedPointsSignalService {


    public achievedPoints = signal(0);
    constructor() { }

}
