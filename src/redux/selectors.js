export const selectAdvertState = (state) => state.advert;

export const selectFavorites = (state) => state.favorites;

export const selectFilteredAdverts = (state) => {
  const { adverts, filters } = selectAdvertState(state);
  const filteredAdverts = adverts.filter((advert) => {
    const brandMatch =
      !filters.carBrand ||
      advert.make?.toLowerCase() === filters.carBrand.toLowerCase();
    const priceMatch =
      !filters.priceTo ||
      (advert.rentalPrice &&
        parseInt(advert.rentalPrice.replace("$", "")) <= filters.priceTo);
    const mileageFromMatch =
      !filters.mileageFrom ||
      (advert.mileage && advert.mileage >= filters.mileageFrom);
    const mileageToMatch =
      !filters.mileageTo ||
      (advert.mileage && advert.mileage <= filters.mileageTo);

    return brandMatch && priceMatch && mileageFromMatch && mileageToMatch;
  });
  return filteredAdverts;
};
