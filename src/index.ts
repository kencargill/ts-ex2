// import { Racer } from "./racer";
import { GasCar } from "./gascar";
import { findRacersWithEmptyFuel } from "./racer-functions";

const one = new GasCar('team1', 0);
const two = new GasCar('team2', 0);
const three = new GasCar('team3', 0);
const four = new GasCar('team4', 0);

const racers: GasCar[] = [one, two, three, four]

const result = findRacersWithEmptyFuel(racers)

console.log(result)