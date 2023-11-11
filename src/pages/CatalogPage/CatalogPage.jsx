import React, { useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import CarList from "../../components/CarList/CarList";
import css from "./CatalogPage.module.css";
import { selectFilteredAdverts } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import { fetchAdverts } from "../../redux/operations";

const Catalog = () => {
  const filteredAdverts = useSelector(selectFilteredAdverts);
  const dispatch = useDispatch();
  // const [adverts, setAdverts] = useState([]);
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState();

  // useEffect(() => {
  //   setAdverts(filteredAdverts);
  //   console.log("effect 1 setAdv");
  //   console.log(filteredAdverts);
  // }, [filteredAdverts]);

  // useEffect(() => {
  //   dispatch(fetchAdverts(page));
  //   console.log("effect 2 fetch by page");
  //   console.log(filteredAdverts);
  // }, [dispatch, page]);

  useEffect(() => {
    dispatch(fetchAdverts(page));
    // return () => {
    //   dispatch(clearAdverts());
    //   setPage(1);
    // };
  }, [dispatch, page]);

  useEffect(() => {
    setShowLoadMore(
      filteredAdverts.length !== 0 && filteredAdverts.length % 12 === 0
    );
  }, [filteredAdverts]);

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    console.log("on loadmore");
  };

  return (
    <div className={css.container}>
      <Filter />
      <CarList data={filteredAdverts} />
      {showLoadMore && <Button onClick={onLoadMore}>Load more</Button>}
    </div>
  );
};

export default Catalog;
