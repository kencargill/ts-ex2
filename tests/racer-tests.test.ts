import { findRacersWithEmptyFuel, findAverageSpeed, getFasterRacer } from "../src/racer-functions";
import { GasCar } from '../src/gascar';
import { SolarCar } from '../src/solarcar';

describe('findRacersWithEmptyFuel', () => {
    test('GasCar - 2 of 4 have no fuel.', () => {
        const one = new GasCar('team1', 20);
        const two = new GasCar('team2', 0);
        const three = new GasCar('team3', 0);
        const four = new GasCar('team4', 15);

        const racers: GasCar[] = [one, two, three, four];

        const result = findRacersWithEmptyFuel(racers);

        expect(result).toEqual([
            { speed: 0, team: 'team2', fuel: 0 },
            { speed: 0, team: 'team3', fuel: 0 }
        ]);
    });

    test('GasCar - all have no fuel.', () => {
        const one = new GasCar('team1', 0);
        const two = new GasCar('team2', 0);
        const three = new GasCar('team3', 0);
        const four = new GasCar('team4', 0);
        
        const racers: GasCar[] = [one, two, three, four];

        const result = findRacersWithEmptyFuel(racers);

        expect(result).toEqual([
            {"fuel": 0, "speed": 0, "team": "team1"}, 
            {"fuel": 0, "speed": 0, "team": "team2"}, 
            {"fuel": 0, "speed": 0, "team": "team3"}, 
            {"fuel": 0, "speed": 0, "team": "team4"}
        ]);
    });

    test('GasCar - all have fuel.', () => {
        const one = new GasCar('team1', 10);
        const two = new GasCar('team2', 20);
        const three = new GasCar('team3', 30);
        const four = new GasCar('team4', 40);
        
        const racers: GasCar[] = [one, two, three, four];

        const result = findRacersWithEmptyFuel(racers);

        expect(result).toEqual([]);
    });

    test('SolarCar - all have fuel.', () => {
        const one = new SolarCar('team1');
        const two = new SolarCar('team2');
        const three = new SolarCar('team3');
        const four = new SolarCar('team4');

        const racers: SolarCar[] = [one, two, three, four];

        const result = findRacersWithEmptyFuel(racers)

        expect(result).toEqual([]);
    });

    test('SolarCar and GasCar - 2 of 4 have fuel.', () => {
        const one = new GasCar('team1', 0);
        const two = new GasCar('team2', 0);
        const three = new SolarCar('team3');
        const four = new SolarCar('team4');

        const racers = [one, two, three, four];

        const result = findRacersWithEmptyFuel(racers)

        expect(result).toEqual([
            { "fuel": 0, "speed": 0, "team": "team1" },
            { "fuel": 0, "speed": 0, "team": "team2" }
        ]);
    });

    test('Empty array returns empty', () => {
        const racers: GasCar[] | SolarCar[] = []

        const result = findRacersWithEmptyFuel(racers)

        expect(result).toEqual([]);
    });
});

describe('findAverageSpeed', () => {
    test('GasCar - Varying speeds, average should be 5', () => {
        const one = new GasCar('team1', 0);
        one.accelerate();
        const two = new GasCar('team2', 0);
        two.accelerate();
        two.accelerate();
        const three = new GasCar('team3', 0);
        three.accelerate();
        three.accelerate();
        three.accelerate();
        const four = new GasCar('team4', 0);
        four.accelerate();
        four.accelerate();
        four.accelerate();
        four.accelerate();

        const racers: GasCar[] = [one, two, three, four];

        const result = findAverageSpeed(racers);

        expect(result).toBe(5);
    });

    test('GasCar and SolarCar - Varying speeds, average should be 3.25', () => {
        const one = new GasCar('team1', 0);
        one.accelerate();
        const two = new GasCar('team2', 0);
        two.accelerate();
        two.accelerate();
        const three = new SolarCar('team3');
        three.accelerate();
        three.accelerate();
        three.accelerate();
        const four = new SolarCar('team4');
        four.accelerate();
        four.accelerate();
        four.accelerate();
        four.accelerate();

        const racers: GasCar[] | SolarCar[] = [one, two, three, four];

        const result = findAverageSpeed(racers);

        expect(result).toBe(3.25);
    });

    test('Everyone is going 0, should return 0', () => {
    const one = new GasCar('team1', 0);
    const two = new GasCar('team2', 0);
    const three = new GasCar('team3', 0);
    const four = new GasCar('team4', 0);

    const racers: GasCar[] | SolarCar[] = [one, two, three, four];

    const result = findAverageSpeed(racers);

    expect(result).toBe(0);
    });

    test('Empty array, should return 0', () => {
        const racers: GasCar[] | SolarCar[] = [];

        const result = findAverageSpeed(racers);
    
        expect(result).toBe(0);
    });

});

describe('getFasterRacer', () => {
    test('GasCar - racerA faster', () => {
        const racerA = new GasCar('team1');
        const racerB = new GasCar('team2');

        racerA.accelerate();

        const result = getFasterRacer(racerA, racerB);

        expect(result).toEqual(
            { speed: 2, team: 'team1', fuel: 9 }
        );
    });

    test('SolarCar - racerB faster', () => {
        const racerA = new GasCar('team1');
        const racerB = new GasCar('team2');

        racerB.accelerate();

        const result = getFasterRacer(racerA, racerB);

        expect(result).toEqual(
            { speed: 2, team: 'team2', fuel: 9 }
        );
    });

    test('GasCar - same speed.', () => {
        const racerA = new GasCar('team1');
        const racerB = new GasCar('team2');

        const result = getFasterRacer(racerA, racerB);

        expect(result).toBe(null);
    });

    test('GasCar and SolarCar - same speed', () => {
        const racerA = new SolarCar('team1');
        const racerB = new GasCar('team2');

        racerB.accelerate();

        const result = getFasterRacer(racerA, racerB);

        expect(result).toEqual(
            { speed: 2, team: 'team2', fuel: 9 }
        );
    });
})