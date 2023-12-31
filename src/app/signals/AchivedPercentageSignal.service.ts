import { Injectable, computed } from '@angular/core';
import { AchivedPointsSignalService } from './AchivedPointsSignal.service';
import { MaximumPointsSignalService } from './MaximumPointsSignal.service';

@Injectable({
    providedIn: 'root'
  })
export class AchivedPercentageSignalService {



    public Percentage = computed(() => Math.trunc((this.achievedPoints.achievedPoints() / this.maximumPoints.maximumPoints()) * 100));

    constructor(public achievedPoints: AchivedPointsSignalService,
        public maximumPoints: MaximumPointsSignalService) { }

}
