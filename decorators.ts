import {Car} from './car.ts';

export class SunroofDecorator implements Car {
    private car: Car;

    constructor(car: Car) {
        this.car = car;
    }

    cost(): number {
        return this.car.cost() + 1200; // Adding cost of sunroof
    }

    description(): string {
        return `${this.car.description()}, with a sunroof`;
    }
}

export class LeatherSeatsDecorator implements Car {
    private car: Car;

    constructor(car: Car) {
        this.car = car;
    }

    cost(): number {
        return this.car.cost() + 1500; // Adding cost of leather seats
    }

    description(): string {
        return `${this.car.description()}, with leather seats`;
    }
}

export class TurboEngineDecorator implements Car {
    private car: Car;

    constructor(car: Car) {
        this.car = car;
    }

    cost(): number {
        return this.car.cost() + 5000; // Adding cost of turbo engine
    }

    description(): string {
        return `${this.car.description()}, with a turbocharged engine`;
    }
}
