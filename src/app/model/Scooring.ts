import { Observable, map } from 'rxjs';
import { Score } from './score';
import { HttpClient } from '@angular/common/http';

export class Scooring {

    private path: string;
    /**
     *
     */
    constructor(public filePath: string, private httpClient: HttpClient) {
        this.path = filePath;
    }

    public getScore(): Observable<Score[]> {
        return this.httpClient.get(this.path, { responseType: 'text' }).pipe(
            map(response => {
                const rows = response.split('\n');
                const scores: Score[] = [];
                for (let i = 1; i < rows.length; i++) { // Skip the header row
                    const row = rows[i].split(';');
                    const grade: Score = {
                        maxPercentage: parseInt(row[0]),
                        minPercentage: parseInt(row[1]),
                        name: row[2],
                        points: parseInt(row[3], 10),
                    };
                    scores.push(grade);
                }
                return scores;
            })
        );
    }
}
