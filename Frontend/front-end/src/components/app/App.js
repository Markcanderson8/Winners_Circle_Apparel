import React from 'react';
import './App.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductPage from '../product-page/ProductPage';
import CheckoutPage from '../checkout-page/CheckoutPage';
import ConfirmationPage from '../confirmation-page/ConfirmationPage';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import NavBar from '../navbar/NavBar';
import SingleProductPage from './singleProductPage/SingleProductPage';
import HomePage from '../home-page/HomePage';
import Reviews from '../review-page/Reviews';


/**
 * @name App
 * @returns component
 * changed to single quotes
 */
const App = () => (
  <BrowserRouter>
    <NavBar />
    <Header />
    <Switch>
      <Route exact path="/" render={() => <HomePage />} />
      <Route exact path="/checkout" render={() => <CheckoutPage />} />
      <Route exact path="/confirmation" render={() => <ConfirmationPage />} />
      <Route exact path="/products" render={() => <ProductPage />} />
      <Route exact path="/products/:id" render={() => <SingleProductPage />} />
      <Route exact path="/reviews/:id" render={() => <Reviews />} /> 
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;
