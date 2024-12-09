// Importing Vehicle, Wheel, and Truck classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
import { AbleToTow } from '../interfaces/AbleToTow';
import Truck from './Truck.js'; // Add this line to import the Truck class
import Car from './Car.js'; // Add this line to import the Car class

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle implements AbleToTow {
  tow(vehicle: Truck | Motorbike | Car): void {
    // Implement the tow method logic here
  }
  // Remove the duplicate declaration of 'towingCapacity'
  wheels: Wheel[]; 
  towingCapacity: number;

  // TODO: Create a constructor that accepts the properties of the Motorbike class
  // TODO: The constructor should call the constructor of the parent class, Vehicle
  // TODO: The constructor should initialize the properties of the Motorbike class
  // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, wheels: Wheel[]) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels.length === 2 ? wheels : [new Wheel(18, "DefaultBrand"), new Wheel(18, "DefaultBrand")];
    this.towingCapacity = 0; // Assuming motorbikes don't tow, or adjust accordingly
  }

  // Implement the wheelie method
  wheelie() {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails(); // Call the parent class method to print general details
    console.log("Additional Motorbike Details:");
    console.log(`Wheels: ${this.wheels.map((wheel) => `${wheel.getDiameter}`).join(", ")}`);
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
  }

  // TODO: Declare properties of the Motorbike class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])
  vin: string;
  color: string;
  override make: string;
  override model: string;
  year: number;
  override weight: number;
  topSpeed: number;

}

// Export the Motorbike class as the default export
export default Motorbike;
