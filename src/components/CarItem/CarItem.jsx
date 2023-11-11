import React, { useState } from "react";
import css from "./CarItem.module.css";
import Button from "./../Button/Button";
import Modal from "./../Modal/Modal";
import sprite from "../../images/sprite.svg";

const CarItem = ({ car }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isHeartChecked, setHeartChecked] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleHeartClick = () => {
    setHeartChecked(!isHeartChecked);
  };

  return (
    <>
      <li className={css.item}>
        <div className={css.imageWrap}>
          <img
            loading="lazy"
            src={car.img}
            alt={car.make}
            width={274}
            height={268}
            className={css.image}
          />
          <button
            className={`${css.heartBtn} ${isHeartChecked ? css.checked : ""}`}
            onClick={handleHeartClick}
          >
            <svg width="18" height="18" className={css.icon}>
              <use href={sprite + "#icon-heart-white"}></use>
            </svg>
          </button>
        </div>
        <div className={css.titleWrap}>
          <h2 className={css.title}>
            {car.make} <span>{car.model}</span>, {car.year}
          </h2>
          <p>{car.rentalPrice}</p>
        </div>
        <ul className={css.info}>
          <li>{car.address.split(", ")[1]}</li>
          <li>{car.address.split(", ")[2]}</li>
          <li>{car.rentalCompany}</li>
          <li className={css.break}></li>
          <li>{car.type}</li>
          <li>{car.model}</li>
          <li>{car.mileage}</li>
          <li>{car.accessories[0]}</li>
        </ul>
        <Button onClick={openModal}>Learn more</Button>
      </li>
      {isModalOpen && (
        <Modal car={car} onClose={closeModal} isOpen={isModalOpen} />
      )}
    </>
  );
};

export default CarItem;
