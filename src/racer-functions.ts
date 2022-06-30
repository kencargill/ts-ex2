import { Racer } from './racer';

export function findRacersWithEmptyFuel (racers: Racer[]): Racer[] {
    let racersOnE: Racer[] = [];

    racers.forEach((racer: Racer) => {
        if (racer.isFuelEmpty()) {racersOnE.push(racer)};
    });

    return racersOnE;
};

export function findAverageSpeed (racers: Racer[]): number {
    if (racers.length){let speedTotal = 0;

    racers.forEach((racer: Racer) => {
        speedTotal += racer.speed;
    });

    return speedTotal / racers.length;
    } else {
        return 0;
    }
};

export function getFasterRacer (racerA: Racer, racerB: Racer) {
    if (racerA.speed === racerB.speed) {
        return null;
    } else if (racerA.speed > racerB.speed) {
        return racerA;
    }else if (racerA.speed < racerB.speed) {
        return racerB;
    };
};