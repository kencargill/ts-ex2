import { GasCar } from '../src/gascar';

describe('GasCar', () => {
    test('The team and fuel properties are set from the constructor parameters.', () => {
        const team = "solar car";
        const fuel = 20;

        const solarCar = new GasCar(team, fuel);

        expect(solarCar.team).toBe(team);
        expect(solarCar.fuel).toBe(fuel);

    });

    test('fuel defaults to 10, when the second constructor parameter is omitted.', () => {
        const team = "solar car";
        
        const solarCar = new GasCar(team);

        expect(solarCar.fuel).toBe(10);
    });

    test('The speed property starts at 0.', () => {
        const team = "solar car";
        
        const solarCar = new GasCar(team);

        expect(solarCar.speed).toBe(0);
    });

    test('Calling accelerate once brings speed to 2.', () => {
        const team = "solar car";
        
        const solarCar = new GasCar(team);

        solarCar.accelerate();

        expect(solarCar.speed).toBe(2);
    });

    test('Calling accelerate twice brings speed to 4.', () => {
        const team = "solar car";
        
        const solarCar = new GasCar(team);

        solarCar.accelerate();
        solarCar.accelerate();

        expect(solarCar.speed).toBe(4);
    });

    test('Calling accelerate once reduces fuel by 1.', () => {
        const team = "solar car";
        
        const solarCar = new GasCar(team);

        solarCar.accelerate();

        expect(solarCar.fuel).toBe(9);
    });

    test(' Calling accelerate twice reduces fuel by 2.', () => {
        const team = "solar car";
        
        const solarCar = new GasCar(team);

        solarCar.accelerate();
        solarCar.accelerate();

        expect(solarCar.fuel).toBe(8);
    });

    test('isFuelEmpty returns true when fuel is 0.', () => {
        const team = "solar car";
        
        const solarCar = new GasCar(team, 0);

        const fuelEmpty = solarCar.isFuelEmpty();

        expect(fuelEmpty).toBe(true);
    });

    test('isFuelEmpty returns false when fuel is greater than 0.', () => {
        const team = "solar car";
        
        const solarCar = new GasCar(team);

        const fuelEmpty = solarCar.isFuelEmpty();

        expect(fuelEmpty).toBe(false);
    });
})