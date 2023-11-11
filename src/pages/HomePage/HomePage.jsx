import React from "react";
import css from "./HomePage.module.css";
import carImg from "../../images/volkswagen.png";

const Home = () => {
  return (
    <div>
      <div className={css.hero}>
        <div className={css.content}>
          <div className={css.text}>
            <h1>
              Welcome to Our <span>Car Rental</span> Service
            </h1>
            <p>Explore our premium fleet and enjoy your ride!</p>
          </div>
          <div className={css.thumb}>
            <img className={css.image} src={carImg} alt="Car Rental Service" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
