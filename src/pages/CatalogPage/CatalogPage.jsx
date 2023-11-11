import React, { useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import CarList from "../../components/CarList/CarList";
import css from "./CatalogPage.module.css";
import { selectVisibleAdverts } from "../../redux/selectors";
import { useSelector } from "react-redux";

const Catalog = () => {
  const visibleAdverts = useSelector(selectVisibleAdverts);
  return (
    <div className={css.container}>
      <Filter />
      <CarList data={visibleAdverts} />
    </div>
  );
};

export default Catalog;
