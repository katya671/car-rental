import React from "react";
import css from "./Button.module.css";

const Button = ({ onClick, padding, children }) => {
  return (
    <button
      onClick={onClick}
      className={css.button}
      style={{ padding: padding }}
    >
      {children}
    </button>
  );
};

export default Button;
