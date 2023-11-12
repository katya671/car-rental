import React, { useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import CarList from "../../components/CarList/CarList";
import css from "./CatalogPage.module.css";
import Button from "../../components/Button/Button";
import { fetchAllAdverts, fetchAdvertsByPage } from "../../api";

const Catalog = () => {
  const [page, setPage] = useState(1);
  const [adverts, setAdverts] = useState([]);
  const [allAdverts, setAllAdverts] = useState([]);
  const [filteredAdverts, setFilteredAdverts] = useState(null);
  const [filters, setFilters] = useState({
    carBrand: "",
    priceTo: "",
    mileageFrom: "",
    mileageTo: "",
  });
  const [isFiltered, setIsFiltered] = useState(false);

  const fetchData = async () => {
    try {
      const loadedAdverts = await fetchAdvertsByPage(page);
      setAdverts((prevCatalog) => [...prevCatalog, ...loadedAdverts]);
    } catch (error) {
      console.error("Error fetching adverts by page:", error);
    }

    try {
      const allAdvertsData = await fetchAllAdverts();
      setAllAdverts(allAdvertsData);
    } catch (error) {
      console.error("Error fetching all adverts:", error);
    }
  };

  const onLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    if (isFiltered) {
      const filteredAdverts = allAdverts.filter((advert) => {
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
      setFilteredAdverts(filteredAdverts);
    } else {
      setFilteredAdverts([]);
    }
  }, [filters, isFiltered]);

  const onSearch = (filters) => {
    setIsFiltered(true);
    setFilters(filters);
  };

  return (
    <div className={css.container}>
      <Filter onSearch={onSearch} />
      {isFiltered ? (
        <CarList data={filteredAdverts} />
      ) : (
        <CarList data={adverts} />
      )}
      {!isFiltered && adverts.length < allAdverts.length && (
        <Button onClick={onLoadMore}>Load more</Button>
      )}
    </div>
  );
};

export default Catalog;
