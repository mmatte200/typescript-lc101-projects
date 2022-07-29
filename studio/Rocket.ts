import { Payload } from "./Payload";
import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";
export class Rocket {

    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;


    }

    sumMass(items: Payload[]): number {
        let totalMass: number = 0;
        
        for (let i: number = 0; i < items.length; i++){
        totalMass += items[i].massKg;   

        }
        return totalMass;
    }

    currentMassKg(): number{
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);

    }

    canAdd(item: Payload): boolean{
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;

    }

    addCargo(cargo: Cargo): boolean{
        if (!this.canAdd(cargo)) {
            return false;
        }

        this.cargoItems.push(cargo);
        return true;
    }

    addAstronaut(astronauts: Astronaut): boolean {

        if (this.canAdd(astronauts)){
            return true;
        } else {
            return false;
        }

    }
}