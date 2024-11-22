// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  wheels: Wheel[]; 

  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, wheels: Wheel[]) {
    super(vin, color, make, model, year, weight, topSpeed);
    
    if (wheels.length !== 2) {
      this.wheels = [
        new Wheel(18, 'DefaultBrand'), // Default front wheel
        new Wheel(18, 'DefaultBrand'), // Default rear wheel
      ];
    } else {
      this.wheels = wheels;
    }
}

// Implement the wheelie method
wheelie(): void {
  console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
}

// Override the printDetails method from the Vehicle class
override printDetails(): void {
  super.printDetails(); // Call the parent class method to print general details
  console.log("Additional Motorbike Details:");
  console.log(`Wheels: ${this.wheels.map((wheel) => `${wheel.diameter}in ${wheel.brand}`).join(", ")}`);
}


  // TODO: Declare properties of the Motorbike class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])

  // TODO: Create a constructor that accepts the properties of the Motorbike class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Motorbike class
    // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not

  // TODO: Implement the wheelie method
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"

  // TODO: Override the printDetails method from the Vehicle class
  // TODO: The method should call the printDetails method of the parent class
  // TODO: The method should log the details of the Motorbike
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
}

// Export the Motorbike class as the default export
export default Motorbike;
