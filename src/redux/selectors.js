export const selectAdvertState = (state) => state.advert;
export const selectFavorites = (state) => state.favorites;
export const selectVisibleAdverts = (state) => {
  const { adverts, filters } = selectAdvertState(state);

  const filteredAdverts = adverts.filter((advert) => {
    const brandMatch =
      !filters.carBrand ||
      (advert.make &&
        advert.make.toLowerCase() === filters.carBrand.toLowerCase());
    const priceMatch =
      !filters.priceTo ||
      (advert.rentalPrice &&
        parseInt(advert.rentalPrice.replace("$", ""), 10) <=
          parseInt(filters.priceTo, 10));
    const mileageFromMatch =
      !filters.mileageFrom ||
      (advert.mileage && advert.mileage >= parseInt(filters.mileageFrom, 10));
    const mileageToMatch =
      !filters.mileageTo ||
      (advert.mileage && advert.mileage <= parseInt(filters.mileageTo, 10));

    return brandMatch && priceMatch && mileageFromMatch && mileageToMatch;
  });
  console.log(filteredAdverts);
  return filteredAdverts;
};
