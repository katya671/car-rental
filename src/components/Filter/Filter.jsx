import React, { useState } from "react";
import Select from "react-select";
import css from "./Filter.module.css";
import Button from "../Button/Button";

const brandOptions = [
  { value: "buick", label: "buick" },
  { value: "volvo", label: "volvo" },
  { value: "hummer", label: "hummer" },
  { value: "subaru", label: "subaru" },
  { value: "mitsubishi", label: "mitsubishi" },
  { value: "nissan", label: "nissan" },
  { value: "lincoln", label: "lincoln" },
  { value: "gmc", label: "gmc" },
  { value: "hyundai", label: "hyundai" },
  { value: "buick2", label: "buick2" },
  { value: "volvo2", label: "volvo2" },
  { value: "hummer2", label: "hummer2" },
  { value: "subaru2", label: "subaru2" },
  { value: "mitsubishi2", label: "mitsubishi2" },
  { value: "nissan2", label: "nissan2" },
  { value: "lincoln2", label: "lincoln2" },
  { value: "gmc2", label: "gmc2" },
  { value: "hyundai2", label: "hyundai2" },
];

const priceOptions = [
  { value: "30", label: "30" },
  { value: "40", label: "40" },
  { value: "50", label: "50" },
  { value: "60", label: "60" },
  { value: "70", label: "70" },
  { value: "80", label: "80" },
  { value: "90", label: "90" },
  { value: "100", label: "100" },
  { value: "110", label: "110" },
];

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
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");

  return (
    <form className={css.form}>
      <div className={css.filterItem}>
        <label>Car brand</label>
        <Select
          id="brand"
          placeholder="Enter the text"
          isSearchable={true}
          name="brand"
          options={brandOptions}
          styles={styles}
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
        <Button padding={"14px"}>Search</Button>
      </div>
    </form>
  );
};

export default Filter;
