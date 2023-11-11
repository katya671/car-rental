import React, { lazy, useEffect } from "react";
import SharedLayout from "../SharedLayout/SharedLayout";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAdverts } from "../../redux/operations";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const FavoritesPage = lazy(() =>
  import("../../pages/FavoritesPage/FavoritesPage")
);

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchAdverts());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
