import React from "react";
import css from "./HomePage.module.css";
import carImg from "../../images/volkswagen.png";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className={css.home}>
      <div className={css.container}>
        <div className={css.content}>
          <h1>
            Welcome to Our <span>Car Rental</span> Service
          </h1>
          <p>Rent the perfect car for any journey. Explore our catalog now.</p>
          <Link to="/catalog" className={css.link}>
            <Button>To catalog</Button>
          </Link>
        </div>
        <div className={css.thumb}>
          <img className={css.image} src={carImg} alt="Car Rental Service" />
        </div>
      </div>
    </section>
  );
};

export default Home;
