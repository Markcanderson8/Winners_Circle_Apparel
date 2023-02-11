import React, { useCallback, useState } from 'react';
import style from "./carousel.module.css";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { CombSpinner } from 'react-spinners-kit';
import { couldStartTrivia } from 'typescript';
import myGolf from "./products/golf.jpg";
import mySoccer from "./products/soccer.jpg";
import myBasketball from "./products/basketball.jpg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data1, setData1] = useState('');
  const [data2, setData2] = useState('');
  const [data3, setData3] = useState('');

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:8085/products/1'),
      fetch('http://localhost:8085/products/9'),
      fetch('http://localhost:8085/products/477')
    ]).then((responses) => {
      return Promise.all(responses.map((response) => {
        return response.json();
      }));
    }).then((data) => {
      setData1(data[0]);
      setData2(data[1]);
      setData3(data[2]);
    }).catch((error) => {
      console.log(error);
    }) 
  }, []);

  const slides = [
    {id: data1.id, img: myGolf, title: data1.name, subtitle: "Save 10% All Month on Gear!!!"},
    {id: data2.id, img: mySoccer, title: data2.name, subtitle: "Soccer Gear 15% Off"},
    {id: data3.id, img: myBasketball, title: data3.name, subtitle: "Save 15% On All Items"}
  ];

  const prevPage = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }

  const nextPage = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex);
  }

  const goToSlide = (index) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      nextPage();
    }, 10000)
    return () => clearTimeout(timer);
  },[nextPage])

  return (
    <div className={style.containerSlide}>
      <div className={`${style.containerStyles}, ${style.slideStyles}`}>
        <div className={style.leftArrow} onClick={prevPage}>&#12296;</div>
        <div className={style.rightArrow} onClick={nextPage}>&#12297;</div>
        <Link className={style.link} to={`products/${slides[currentIndex].id}`}>
          <div className={style.slideStyles} style={{backgroundImage: `url(${slides[currentIndex].img})`}}>
            <h2 className={style.title}>{slides[currentIndex].title}</h2>
            <h2 className={style.subtitle}>{slides[currentIndex].subtitle}</h2>
          </div>
        </Link>
        <div className={style.dots}>
          {slides.map((slide, index) => (
            <div className={`${slide.id === slides[currentIndex].id ? style.blackDot : style.dot}`} key={index} onClick={() => goToSlide(index)}>&#11044;</div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel; 