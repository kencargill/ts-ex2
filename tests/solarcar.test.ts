import { SolarCar } from "../src/solarcar";

describe('SolarCar', () => {
    test('The team property is set from the constructor parameter.', () => {
        const team = "solar car";

        const solarCar = new SolarCar(team);

        expect(solarCar.team).toBe(team);
    });

    test('The speed property starts at 0.', () => {
        const team = "solar car";
        
        const solarCar = new SolarCar(team);

        expect(solarCar.speed).toBe(0);
    });

    test('Calling accelerate once brings speed to 1.', () => {
        const team = "solar car";
        
        const solarCar = new SolarCar(team);

        solarCar.accelerate();

        expect(solarCar.speed).toBe(1);
    });

    test('Calling accelerate twice brings speed to 2.', () => {
        const team = "solar car";
        
        const solarCar = new SolarCar(team);

        solarCar.accelerate();
        solarCar.accelerate();

        expect(solarCar.speed).toBe(2);
    });

    test('isFuelEmpty returns false.', () => {
        const team = "solar car";
        
        const solarCar = new SolarCar(team);

        const fuelEmpty = solarCar.isFuelEmpty();

        expect(fuelEmpty).toBe(false);
    });
})