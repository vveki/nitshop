import React from "react";
import "./App.css";
import "./assets/fonts/Lato-Black.ttf";
import "./assets/fonts/Lato-BlackItalic.ttf";
import "./assets/fonts/Lato-Bold.ttf";
import "./assets/fonts/Lato-BoldItalic.ttf";
import "./assets/fonts/Lato-Italic.ttf";
import "./assets/fonts/Lato-Light.ttf";
import "./assets/fonts/Lato-LightItalic.ttf";
import "./assets/fonts/Lato-Regular.ttf";
import "./assets/fonts/Lato-Thin.ttf";
import "./assets/fonts/Lato-ThinItalic.ttf";
import "./assets/fonts/Montserrat-Black.ttf";
import "./assets/fonts/Montserrat-BlackItalic.ttf";
import "./assets/fonts/Montserrat-Bold.ttf";
import "./assets/fonts/Montserrat-BoldItalic.ttf";
import "./assets/fonts/Montserrat-ExtraBold.ttf";
import "./assets/fonts/Montserrat-ExtraBoldItalic.ttf";
import "./assets/fonts/Montserrat-ExtraLight.ttf";
import "./assets/fonts/Montserrat-ExtraLightItalic.ttf";
import "./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf";
import "./assets/fonts/Montserrat-Italic.ttf";
import "./assets/fonts/Montserrat-Light.ttf";
import "./assets/fonts/Montserrat-Regular.ttf";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePageScreen from "./Screens/HomePageScreen/HomePageScreen";
import ShopScreen from "./Screens/ShopScreen/ShopScreen";
import BlogScreen from "./Screens/BlogScreen/BlogScreen";
import AboutScreen from "./Screens/AboutScreen/AboutScreen";
import ContactScreen from "./Screens/ContactScreen/ContactScreen";
import CartScreen from "./Screens/CartScreen/CartScreen";
import CartContextProvider from "./context/CartContext";
import UserContextProvider from "./context/UserContext";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import CheckoutScreen from "./Screens/CheckoutScreen/CheckoutScreen";
import CategoryScreen from "./Screens/CategoryScreen/CategoryScreen"; 


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePageScreen />,
    },
    {
      path: "/shop",
      element: <ShopScreen />,
    },
    {
      path: "/blog",
      element: <BlogScreen />,
    },
    {
      path: "/about",
      element: <AboutScreen />,
    },
    {
      path: "/contact",
      element: <ContactScreen />,
    },
    {
      path: "/cart",
      element: <CartScreen />,
    },
    {
      path: "/login",
      element: <LoginScreen />,
    },
    {
      path: "/checkout",
      element: <CheckoutScreen />,
    },
    {
      path: "/shop/1",
      element: <CategoryScreen />,
    },
  ]);
  return (
    <>
      <UserContextProvider>
        <CartContextProvider>
          <RouterProvider router={router} />
        </CartContextProvider>
      </UserContextProvider>
    </>
  );
};

export default App;
