import React from "react";
import Navigation from "../../Templates/Navigation/Navigation";
import { CheckoutForm } from "../../Templates/CheckoutForm/CheckoutForm";
import Footer from "../../Templates/Footer/Footer";
import ItemsProduct from "../../Templates/ItemsShop/ItemsProduct";
const CheckoutScreen = () => {
  return (
    <div>
      <Navigation />
      <CheckoutForm />
      <ItemsProduct />
      <Footer />
    </div>
  );
};

export default CheckoutScreen;
