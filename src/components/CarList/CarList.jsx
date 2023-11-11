import React, { useEffect } from "react";
import CarItem from "./../CarItem/CarItem";
import css from "./CarList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectVisibleAdverts } from "../../redux/selectors";
import { fetchAdverts } from "../../redux/operations";

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
