import React, { useState } from "react";
import NewestWidget from "../widget/NewestWidget";
import Carousel from "../carousel/Carousel";
import PopularWidget from "../widget/PopularWidget";
import FilterMenu from "../filter-menu/FilterMenu";
import style from "./HomePage.module.css";

const HomePage = (props) => {

  // this is mocked so if you click an option on FilterMenu it does not break
  // it can be deleted safely
  const [emptyProducts, setEmptyProducts] = useState([]);
  const setEmptyPage = () => { };

  return (
    <div className={style.homePage}>
      <Carousel />
      <div className={style.widgetContainer}>
        <div className={style.popularWidget}>
          <PopularWidget />
        </div>
        <div className={style.newestWidget}>
          <NewestWidget />
        </div>
      </div>
    </div >
  );
}
export default HomePage;