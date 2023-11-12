import React, { useCallback, useEffect, useState } from 'react';
import Filter from '../../components/Filter/Filter';
import CarList from '../../components/CarList/CarList';
import css from './CatalogPage.module.css';
import { fetchAllAdverts, fetchAdvertsByPage } from '../../api';
import Loader from '../../components/Loader/Loader';
import { toast } from 'react-hot-toast';

const Catalog = () => {
  const [page, setPage] = useState(1);
  const [adverts, setAdverts] = useState([]);
  const [allAdverts, setAllAdverts] = useState([]);
  const [filteredAdverts, setFilteredAdverts] = useState(null);
  const [filters, setFilters] = useState({
    carBrand: '',
    priceTo: '',
    mileageFrom: '',
    mileageTo: '',
  });
  const [isFiltered, setIsFiltered] = useState(false);
  const [loading, setLoading] = useState(true);

  const getAllAdverts = useCallback(async () => {
    try {
      setLoading(true);
      const allAdvertsData = await fetchAllAdverts();
      setAllAdverts(allAdvertsData);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  const getAdvertsByPage = useCallback(async page => {
    try {
      setLoading(true);
      const loadedAdverts = await fetchAdvertsByPage(page);
      setAdverts(prevCatalog => [...prevCatalog, ...loadedAdverts]);
    } catch (error) {
      toast.error('Oops! Something went wrong while loading adverts.');
    } finally {
      setLoading(false);
    }
  }, []);

  const onLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getAllAdverts();
  }, [getAllAdverts]);

  useEffect(() => {
    getAdvertsByPage(page);
  }, [page, getAdvertsByPage]);

  useEffect(() => {
    if (isFiltered) {
      const filteredAdverts = allAdverts.filter(advert => {
        const brandMatch =
          !filters.carBrand ||
          advert.make?.toLowerCase() === filters.carBrand.toLowerCase();
        const priceMatch =
          !filters.priceTo ||
          (advert.rentalPrice &&
            parseInt(advert.rentalPrice.replace('$', '')) <= filters.priceTo);
        const mileageFromMatch =
          !filters.mileageFrom ||
          (advert.mileage && advert.mileage >= filters.mileageFrom);
        const mileageToMatch =
          !filters.mileageTo ||
          (advert.mileage && advert.mileage <= filters.mileageTo);

        return brandMatch && priceMatch && mileageFromMatch && mileageToMatch;
      });
      setFilteredAdverts(filteredAdverts);

      const message = filteredAdverts.length
        ? `${filteredAdverts.length} adverts found.`
        : 'No adverts found.';
      toast.success(message);
    } else {
      setFilteredAdverts([]);
    }
  }, [filters, isFiltered, allAdverts]);

  const onSearch = filters => {
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
      {loading && <Loader />}
      {!isFiltered && adverts.length < allAdverts.length && (
        <button onClick={onLoadMore} className={css.loadMoreBtn}>
          Load more
        </button>
      )}
    </div>
  );
};

export default Catalog;
