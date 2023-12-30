export interface Score {

    maxPercentage: number;
    minPercentage: number
    name: string;
    points: number;
}


export interface Scooring {

    scores: Array<Score>;
}

export class WirtschaftsgymasiumScooring implements Scooring {
    scores: Score[];

    /**
     *
     */
    constructor() {
        this.scores = new Array<Score>();

        this.scores.push(
            {
                maxPercentage: 100,
                minPercentage: 95,
                name: "Sehr gut +",
                points: 15,
            },
            {
                maxPercentage: 95,
                minPercentage: 90,
                name: "Sehr gut",
                points: 14,
            },
            {
                maxPercentage: 90,
                minPercentage: 85,
                name: "Sehr gut -",
                points: 13,
            },
            {
                maxPercentage: 85,
                minPercentage: 80,
                name: "Gut +",
                points: 12,
            },
            {
                maxPercentage: 80,
                minPercentage: 75,
                name: "Gut -",
                points: 11,
            },
            {
                maxPercentage: 75,
                minPercentage: 70,
                name: "Befriedigend +",
                points: 10,
            },
            {
                maxPercentage: 70,
                minPercentage: 65,
                name: "Befriedigend",
                points: 9,
            },
            {
                maxPercentage: 65,
                minPercentage: 60,
                name: "Befriedigend -",
                points: 8,
            },
            {
                maxPercentage: 60,
                minPercentage: 55,
                name: "Ausreichend +",
                points: 7,
            },
            {
                maxPercentage: 55,
                minPercentage: 50,
                name: "Ausreichend",
                points: 6,
            },
            {
                maxPercentage: 50,
                minPercentage: 45,
                name: "Ausreichend -",
                points: 5,
            },
            {
                maxPercentage: 45,
                minPercentage: 40,
                name: "Mangelhaft +",
                points: 4,
            },
            {
                maxPercentage: 40,
                minPercentage: 33,
                name: "Mangelhaft",
                points: 3,
            },
            {
                maxPercentage: 33,
                minPercentage: 27,
                name: "Mangelhaft -",
                points: 2,
            },
            {
                maxPercentage: 27,
                minPercentage: 20,
                name: "Ungenügend +",
                points: 1,
            },
            {
                maxPercentage: 20,
                minPercentage: 0,
                name: "Ungenügend",
                points: 0,
            }
        )

    }
}