// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
import { AbleToTow } from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  wheels: Wheel[];
  towingCapacity: number;

  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, wheels: Wheel[], towingCapacity: number
    ) {
      super();
    
    this.wheels = wheels.length === 4 ? wheels : [
      new Wheel(18, "DefaultBrand"), // Default front left wheel
      new Wheel(18, "DefaultBrand"), // Default front right wheel
      new Wheel(18, "DefaultBrand"), // Default rear left wheel
      new Wheel(18, "DefaultBrand"), // Default rear right wheel
    ];

    this.towingCapacity = towingCapacity;
  }


  // TODO: Declare properties of the Truck class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)

  // TODO: Create a constructor that accepts the properties of the Truck class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Truck class
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not

  // TODO: Implement the tow method from the AbleToTow interface

  tow(vehicle: Vehicle): void {
    const vehicleName = `${vehicle.make} ${vehicle.model}`;
    if (!vehicle.weight || vehicle.weight > this.towingCapacity) {
      console.log(
        `Truck ${this.make} ${this.model} cannot tow ${vehicleName} because it is too heavy.`
      );
      return;
    }
    console.log(`Truck ${this.make} ${this.model} is towing ${vehicleName}.`);
  }

  override printDetails(): void {
    super.printDetails();
    console.log('Additional Truck Details:');
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
    console.log(
      `Wheels: ${this.wheels
        .map((wheel) => `${wheel.getDiameter}in ${wheel.getTireBrand}`)
        .join(', ')}`
    );
  }
}

export default Truck;