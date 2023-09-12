export interface Car {
    cost(): number;
    description(): string;
}

export class BaseCar implements Car {
    cost(): number {
        return 20000; // Base price of our car
    }

    description(): string {
        return 'Base Car';
    }
}
