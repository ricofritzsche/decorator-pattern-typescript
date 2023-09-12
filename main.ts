import {LeatherSeatsDecorator, SunroofDecorator, TurboEngineDecorator} from './decorators.ts';
import {BaseCar} from './car.ts';

const baseCar = new BaseCar();

const carWithSunroof = new SunroofDecorator(baseCar);

console.log(carWithSunroof.description()); // Should print: Base Car, with a sunroof
console.log(carWithSunroof.cost());

const fullyLoadedCar = new TurboEngineDecorator(new LeatherSeatsDecorator(carWithSunroof));

console.log(fullyLoadedCar.description()); // Base Car, with a sunroof, with leather seats, with a turbocharged engine
console.log(fullyLoadedCar.cost()); // Should print: 27700
