import React from 'react';
import FilterMenu from '../filter-menu/FilterMenu';
import style from './ConfirmationPage.module.css';

const ConfirmationPage = () => {

  return (
    <>
      <FilterMenu />
      <div className={style.container}>
        <h2>Order success!</h2>
      </div>
    </>
  );
};

export default ConfirmationPage;
