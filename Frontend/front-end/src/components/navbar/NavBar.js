import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import shoppingCart from "./shopping_cart.png";
import trophy from "./trophy.png";
import Toast from "../toast/Toast";
import { useCart } from '../checkout-page/CartContext';
import { StylesContext } from "@material-ui/styles";
/**
 *   component for the Navbar-Header
 * */
const NavBar = () => {
  const {
    state: { products }
  } = useCart();

  let toastTypes = null;

  const [list, setList] = useState([]);
  
  const showToast = (type) => {
    switch (type) {
      case "success":
        toastTypes = {
          id: list.length + 1,
          title: "Success",
          description: "This is a success toast component",
          backgroundColor: "#5cb85c",
        };
        break;
      case "error":
        toastTypes = {
          id: list.length + 1,
          title: "Error",
          description: "This is an error toast component",
          backgroundColor: "#d9534f",
        };
        break;
      default:
        toastProperties = [];
    }

    setList([...list, toastTypes]);
  };

  return (
    <>
      <div>
        <Toast toastlist={list} position="top-left" setList={setList} />
      </div>
      <div>
        <ul className={style.navUl}>
          <li className={style.navLi}>
            <Link to="/">
              <img className={style.trophy} src={trophy} alt=" " />
            </Link>
          </li>
          <li>
            <h1 className={style.navHeader}>
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Philosopher"
              ></link>
              <Link to="/products">
              WINNER'S CIRCLE SPORTS APPAREL
              </Link>
            </h1>
          </li>
          <li className={`${style.li_cart}, ${style.navLi}`}>
            <Link to="/checkout">
              <img className={style.cart} src={shoppingCart} alt="" />
            <div className={style.cartbadgediv}><p className={style.cartbadge}>{products.length}</p> </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
