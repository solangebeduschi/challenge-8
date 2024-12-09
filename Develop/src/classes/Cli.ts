import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";

export class Cli {
  vehicles: (Car | Truck | Motorbike)[] = [];
  selectedVehicleVin: string | undefined;
  exit: boolean = false;

  constructor(vehicles: (Car | Truck | Motorbike)[]) {
    this.vehicles = vehicles;
  }

  static generateVin(): string {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  startCli(): void {
    if (this.exit) return;

    inquirer
      .prompt([
        {
          type: "list",
          name: "action",
          message: "What would you like to do?",
          choices: ["Create a Vehicle", "Choose a Vehicle", "Exit"],
        },
      ])
      .then((answers) => {
        if (answers.action === "Create a Vehicle") this.createVehicle();
        else if (answers.action === "Choose a Vehicle") this.chooseVehicle();
        else {
          this.exit = true;
          console.log("Exiting CLI. Goodbye!");
        }
      });
  }

  chooseVehicle(): void {
    if (this.vehicles.length === 0) {
      console.log("No vehicles available.");
      this.startCli();
      return;
    }

    inquirer
      .prompt([
        {
          type: "list",
          name: "selectedVehicleVin",
          message: "Select a vehicle to perform an action on:",
          choices: this.vehicles.map((vehicle) => ({
            name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
            value: vehicle.vin,
          })),
        },
      ])
      .then((answers) => {
        this.selectedVehicleVin = answers.selectedVehicleVin;
        this.performActions();
      });
  }

  performActions(): void {
    const selectedVehicle = this.vehicles.find(
      (vehicle) => vehicle.generateVin === this.selectedVehicleVin
    );

    if (!selectedVehicle) {
      console.log("No vehicle selected.");
      this.startCli();
      return;
    }

    inquirer
      .prompt([
        {
          type: "list",
          name: "action",
          message: `What would you like to do with ${selectedVehicle.make} ${selectedVehicle.model}?`,
          choices: ["View Details", "Delete Vehicle", "Go Back"],
        },
      ])
      .then((answers) => {
        if (answers.action === "View Details") {
          selectedVehicle.printDetails();
          this.performActions();
        } else if (answers.action === "Delete Vehicle") {
          this.vehicles = this.vehicles.filter(
            (vehicle) => vehicle.vin !== this.selectedVehicleVin
          );
          console.log("Vehicle deleted.");
          this.startCli();
        } else {
          this.startCli();
        }
      });
  }

  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: "list",
          name: "vehicleType",
          message: "Select a vehicle type to create:",
          choices: ["Car", "Truck", "Motorbike"],
        },
      ])
      .then((answers) => {
        if (answers.vehicleType === "Car") this.createCar();
        else if (answers.vehicleType === "Truck") this.createTruck();
        else this.createMotorbike();
      });
  }

  createCar(): void {
    inquirer
      .prompt([
        { type: "input", name: "color", message: "Enter car color:" },
        { type: "input", name: "make", message: "Enter car make:" },
        { type: "input", name: "model", message: "Enter car model:" },
        { type: "input", name: "year", message: "Enter car year:" },
        { type: "input", name: "weight", message: "Enter car weight:" },
        { type: "input", name: "topSpeed", message: "Enter car top speed:" },
      ])
      .then((answers) => {
        const car = new Car(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          []
        );
        this.vehicles.push(car);
        console.log("Car created successfully!");
        this.startCli();
      });
  }

  createTruck(): void {
      inquirer
        .prompt([
          { type: "input", name: "color", message: "Enter truck color:" },
          { type: "input", name: "make", message: "Enter truck make:" },
          { type: "input", name: "model", message: "Enter truck model:" },
          { type: "input", name: "year", message: "Enter truck year:" },
          { type: "input", name: "weight", message: "Enter truck weight:" },
          { type: "input", name: "topSpeed", message: "Enter truck top speed:" },
          { type: "input", name: "wheels", message: "Enter truck wheels:" },
        ])
        .then((answers) => {
          const defaultWheels = [
            new Wheel(18, "DefaultBrand"),
            new Wheel(18, "DefaultBrand"),
            new Wheel(18, "DefaultBrand"),
            new Wheel(18, "DefaultBrand"),
          ];
          const truck = new Truck(
            Cli.generateVin(),
            answers.color,
            answers.make,
            answers.model,
            parseInt(answers.year),
            parseInt(answers.weight),
            parseInt(answers.topSpeed),
            defaultWheels
          );
          this.vehicles.push(truck);
          console.log("Truck created successfully!");
          this.startCli();
        });
    }

  createMotorbike(): void {
    inquirer
      .prompt([
        { type: "input", name: "color", message: "Enter motorbike color:" },
        { type: "input", name: "make", message: "Enter motorbike make:" },
        { type: "input", name: "model", message: "Enter motorbike model:" },
        { type: "input", name: "year", message: "Enter motorbike year:" },
        { type: "input", name: "weight", message: "Enter motorbike weight:" },
        { type: "input", name: "topSpeed", message: "Enter motorbike top speed:" },
      ])
      .then((answers) => {
        const motorbike = new Motorbike(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed)
        );
        this.vehicles.push(motorbike);
        console.log("Motorbike created successfully!");
        this.startCli();
      });
  }
}

export default Cli;
