import { Racer } from './racer';

export class SolarCar implements Racer {
    speed: number = 0;

    constructor(public team: string) {
        this.team = team;
    }

    accelerate() {
        this.speed += 1;
    };

    isFuelEmpty() {
        return false;
    }
}