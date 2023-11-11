import React from "react";
import CarItem from "./../CarItem/CarItem";
import css from "./CarList.module.css";

const cars = [
  {
    id: 9582,
    year: 2008,
    make: "Buick",
    model: "Enclave",
    type: "SUV",
    img: "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg",
    description:
      "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
    fuelConsumption: "10.5",
    engineSize: "3.6L V6",
    accessories: ["Leather seats", "Panoramic sunroof", "Premium audio system"],
    functionalities: [
      "Power liftgate",
      "Remote start",
      "Blind-spot monitoring",
    ],
    rentalPrice: "$40",
    rentalCompany: "Luxury Car Rentals",
    address: "123 Example Street, Kiev, Ukraine",
    rentalConditions:
      "Minimum age: 25\nValid driver's license\nSecurity deposit required",
    mileage: 5858,
  },
  {
    id: 9584,
    year: 2019,
    make: "Volvo",
    model: "XC90",
    type: "SUV",
    img: "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/volvo_xc90.jpg",
    description:
      "The Volvo XC90 is a premium SUV that offers exceptional safety, advanced technology, and elegant design.",
    fuelConsumption: "8.3",
    engineSize: "2.0L 4-cylinder",
    accessories: [
      "Nappa leather seats",
      "Bowers & Wilkins premium sound system",
      "Head-up display",
    ],
    functionalities: [
      "IntelliSafe advanced safety features",
      "Pilot Assist semi-autonomous driving",
      "Four-zone automatic climate control",
    ],
    rentalPrice: "$50",
    rentalCompany: "Premium Auto Rentals",
    address: "456 Example Avenue, Lviv, Ukraine",
    rentalConditions:
      "Minimum age: 21\nValid driver's license\nProof of insurance required",
    mileage: 5352,
  },
  {
    id: 9586,
    year: 2020,
    make: "Volvo",
    model: "XC60",
    type: "SUV",
    img: "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/volvo_xc60.webp",
    description:
      "The Volvo XC60 is a compact luxury SUV with a beautiful interior, strong performance, and advanced safety features.",
    fuelConsumption: "7.9",
    engineSize: "2.0L 4-cylinder",
    accessories: [
      "Premium leather seats",
      "Harman Kardon audio system",
      "Hands-free power tailgate",
    ],
    functionalities: [
      "City Safety collision avoidance technology",
      "Pilot Assist with adaptive cruise control",
      "9-inch Sensus touchscreen infotainment system",
    ],
    rentalPrice: "$45",
    rentalCompany: "Luxury Car Rentals",
    address: "789 Example Boulevard, Odessa, Ukraine",
    rentalConditions:
      "Minimum age: 23\nValid driver's license\nCredit card required",
    mileage: 5966,
  },
  {
    id: 9587,
    year: 2006,
    make: "HUMMER",
    model: "H2",
    type: "SUV",
    img: "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/hummer_h2.webp",
    description:
      "The HUMMER H2 is a rugged and powerful SUV that stands out with its imposing presence and off-road capabilities.",
    fuelConsumption: "19.8",
    engineSize: "6.0L V8",
    accessories: [
      "Heated leather seats",
      "Bose premium sound system",
      "Off-road package",
    ],
    functionalities: [
      "Electronic locking front and rear differentials",
      "Stabilitrak stability control",
      "Tire pressure monitoring system",
    ],
    rentalPrice: "$55",
    rentalCompany: "Adventure Car Rentals",
    address: "321 Example Road, Kharkiv, Ukraine",
    rentalConditions:
      "Minimum age: 25\nValid driver's license\nSecurity deposit required",
    mileage: 4771,
  },
];

const CarList = () => {
  return (
    <>
      <ul className={css.list}>
        {cars.map((car) => (
          <CarItem key={car.id} car={car} />
        ))}
      </ul>
    </>
  );
};

export default CarList;
