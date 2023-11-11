import React from "react";
import CarItem from "./../CarItem/CarItem";
import css from "./CarList.module.css";

const CarList = ({ data }) => {
  return (
    <>
      <ul className={css.list}>
        {data.map((car) => (
          <CarItem key={car.id} car={car} />
        ))}
      </ul>
    </>
  );
};

export default CarList;
