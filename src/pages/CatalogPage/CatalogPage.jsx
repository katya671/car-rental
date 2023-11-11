import React from "react";
import Filter from "../../components/Filter/Filter";
import CarList from "../../components/CarList/CarList";
import css from "./CatalogPage.module.css";

const Catalog = () => {
  return (
    <div className={css.container}>
      <Filter />
      <CarList />
    </div>
  );
};

export default Catalog;
