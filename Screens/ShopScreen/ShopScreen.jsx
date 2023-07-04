import React, { useEffect } from "react";
import Navigation from "../../Templates/Navigation/Navigation";

import ArticleShopPage from "../../Templates/ArticleShopPage/ArticleShopPage";
import CounterComponent from "../../Templates/CounterComponent/CounterComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../api/userApi";
import { addProducts } from "../../redux/productsSlice";

const ShopScreen = () => {
  const dispatch = useDispatch();
  const select = useSelector((state) => state.products.value);

  useEffect(() => {
    fetchProducts().then((allComments) => dispatch(addProducts(allComments)));
  }, []);

  return (
    <>
      <Navigation />
      <ArticleShopPage />
      {/* <CounterComponent /> */}
    </>
  );
};

export default ShopScreen;
