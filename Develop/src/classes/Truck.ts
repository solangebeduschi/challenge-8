// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  wheels: Wheel[];
  towingCapacity: number;

  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, wheels: Wheel[], towingCapacity: number) {
    super(vin, color, make, model, year, weight, topSpeed);
    
    if (wheels.length !== 4) {
      this.wheels = [
        new Wheel(18, "DefaultBrand"), // Default front left wheel
        new Wheel(18, "DefaultBrand"), // Default front right wheel
        new Wheel(18, "DefaultBrand"), // Default rear left wheel
        new Wheel(18, "DefaultBrand"), // Default rear right wheel
      ];
    } else {
      this.wheels = wheels;
    }

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
  tow(vehicle: Truck | Motorbike | Car): void {
    // TODO: Get the make an model of the vehicle if it exists
    const vehicleName = `${vehicle.make} ${vehicle.model}`;
    // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
    if (vehicle.weight <= this.towingCapacity) {
    // TODO: If it is, log that the vehicle is being towed
    console.log(`Truck ${this.make} ${this.model} is towing ${vehicleName}.`);
    } else {
    // TODO: If it is not, log that the vehicle is too heavy to be towed
    console.log(`Truck ${this.make} ${this.model} cannot tow ${vehicleName} because it is too heavy.`);
    }
  }

  // TODO: Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // TODO: The method should call the printDetails method of the parent class
    super.printDetails();
    // TODO: The method should log the details of the Truck
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
    console.log("Additional Truck Details:");
    console.log(`Towing Capacity: ${this.towingCapacity}lbs`);
    console.log(`Wheels: ${this.wheels.map((wheel) => `${wheel.diameter}in ${wheel.brand}`).join(", ")}`);
}

// Export the Truck class as the default export
export default Truck;
