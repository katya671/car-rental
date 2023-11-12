import React from 'react';
import css from './FavoritesPage.module.css';
import { selectFavorites } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import CarList from '../../components/CarList/CarList';

const Favorites = () => {
  const { favorites } = useSelector(selectFavorites);
  return (
    <div className={css.container}>
      <CarList data={favorites} />
    </div>
  );
};

export default Favorites;
