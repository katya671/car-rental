import React, { useState } from "react";
import Select from "react-select";
import css from "./Filter.module.css";
import Button from "../Button/Button";

import makes from "../../data/makes.json";
import { setFilters } from "../../redux/advertsSlice";
import { useDispatch } from "react-redux";

const options = [
  { value: "", label: "Any" },
  ...makes.map((make) => ({
    value: make.toLowerCase(),
    label: make,
  })),
];

const priceOptions = [];
for (let i = 30; i <= 500; i += 10) {
  priceOptions.push({ value: i.toString(), label: i.toString() });
}

const styles = {
  // control: (baseStyles, state) => ({
  //   ...baseStyles,
  //   backgroundColor: "#f7f7fb",
  //   borderRadius: "14px",
  //   padding: "14px 18px",
  //   border: "none",
  //   minWidth: "224px",
  //   height: "48px",
  //   display: "flex",
  // }),
  // menu: (baseStyles, state) => ({
  //   ...baseStyles,
  //   marginTop: "4px",
  //   padding: "14px 8px 14px 18px",
  //   borderRadius: "14px",
  //   border: "1px solid rgba(18, 20, 23, 0.05)",
  //   background: "#ffffff",
  //   boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.02)",
  // }),
  // menuList: (baseStyles, state) => ({
  //   height: "244px",
  //   overflow: "auto",
  // }),

  control: (baseStyles, state) => ({
    ...baseStyles,
    display: "flex",
    flexWrap: "nowrap",
    minWidth: state.selectProps.id === "brand" ? "224px" : "125px",
    height: "48px",
    padding:
      state.selectProps.id === "brand" ? "14px 18px" : "14px 18px 14px 52px",
    border: "none",
    borderRadius: "14px",
    backgroundColor: "var(--light)",

    "&::before": {
      content: state.selectProps.id === "price" ? "'To $'" : "''",
      position: "absolute",
      left: "18px",
      fontSize: "18px",
      fontWeight: "500",
      lineHeight: "1.11",
    },
  }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    padding: "0",
    color: "var(--dark)",
    transition: "transform var(--tra)",
    transform: state.isFocused ? "rotate(180deg)" : "rotate(0)",
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    color: "var(--dark)",
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "1.11",
    padding: "0",
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: "var(--dark)",
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    marginTop: "4px",
    padding: "14px 8px 14px 18px",
    borderRadius: "14px",
    border: "1px solid rgba(18, 20, 23, 0.05)",
    background: "var(--white)",
    boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.02)",
  }),
  menuList: (_, state) => ({
    maxHeight: state.selectProps.id === "carBrand" ? "272px" : "188px",
    overflowY: "auto",
  }),
  option: () => ({
    color: "rgba(18, 20, 23, 0.20)",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "1.25",
    cursor: "pointer",
    marginBottom: "8px",
    transition: "color var(--tra)",
    "&:hover": {
      color: "var(--dark)",
    },
  }),
};

const Filter = () => {
  const [carBrand, setCarBrand] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    const filters = { carBrand, priceTo, mileageFrom, mileageTo };
    dispatch(setFilters(filters));
  };

  return (
    <form className={css.form}>
      <div className={css.filterItem}>
        <label>Car brand</label>
        <Select
          id="brand"
          placeholder="Enter the text"
          isSearchable={true}
          name="brand"
          options={options}
          styles={styles}
          onChange={(selectedOption) => setCarBrand(selectedOption.value)}
        />
      </div>

      <div className={css.filterItem}>
        <label>Price/1 hour</label>
        <Select
          id="price"
          placeholder=""
          isSearchable={true}
          name="price"
          options={priceOptions}
          styles={styles}
          onChange={(selectedOption) => setPriceTo(selectedOption.value)}
        />
      </div>

      <div className={css.filterItem}>
        <label>Car mileage/km</label>
        <div className={css.inputContainer}>
          <div className={css.inputWrap}>
            <input
              type="number"
              className={css.input}
              value={mileageFrom}
              onChange={(e) => setMileageFrom(e.target.value)}
            />
          </div>
          <div className={css.inputWrap}>
            <input
              type="number"
              className={css.input}
              value={mileageTo}
              onChange={(e) => setMileageTo(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={css.btnContainer}>
        <Button type="submit" padding={"14px"} onClick={handleClick}>
          Search
        </Button>
      </div>
    </form>
  );
};

export default Filter;
