import { Divider } from "@material-ui/core";
import { Pages } from "@material-ui/icons";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { isFunctionDeclaration, setCommentRange } from "typescript";
import style from "./pagination.module.css";

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
  setCurrentPage,
  maxPageLimit,
  setMaxPageLimit,
  minPageLimit,
  setMinPageLimit,
  firstPage
}) => {
  const pageNumberLimit = 10;
  const pageNumbers = [];

  // gets the amount of pages and works with the filter to make sure the correct amount of pages are dispayed
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage + 1); i++) {
    pageNumbers.push(i);
  }

  const totalPages = pageNumbers.length - 1;
  
  const pages = [];
  for (let i = 0; i <= totalPages; i++) {
    pages.push(i);
  }

  const onPrevClick = () => {
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageLimit(maxPageLimit - pageNumberLimit);
      setMinPageLimit(minPageLimit - pageNumberLimit);
    }
    setCurrentPage((prev) => prev - 1);
  };

  const onNextClick = () => {
    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageNumberLimit);
      setMinPageLimit(minPageLimit + pageNumberLimit);
    }
    setCurrentPage((prev) => prev + 1);
  };

  const NumPages = pages.map((page) => {
    if (page <= maxPageLimit && page > minPageLimit) {
      return (
        <li
          key={page}
          id={page}
          onClick={() => paginate(page)}
          className={currentPage === page ? "active" : null}
        >
          <button className={`${currentPage === page ? style.clicked : style.btn}`}>{page}</button>
        </li>
      );
    } else {
      return null;
    }
  });

  const nextPage = () => {
    onNextClick();
  };

  const prevPage = () => {
    onPrevClick();
  };


  const lastPage = () => {
    const allPages = totalPages % 10;
    setMinPageLimit(totalPages - allPages);
    setMaxPageLimit(totalPages + allPages);
    setCurrentPage(totalPages);
  }

  return (
    <div>
      <ul className='pagination justify-content-center'>
        {currentPage > 1 && (
          <li>
            <button className={style.btn} onClick={firstPage}>&lt;&lt;</button>
          </li>
        )}
        {currentPage > 1 && (
          <li>
            <button className={style.btn} onClick={prevPage}>
              &lt;
            </button>
          </li>
        )}
        {pages.length < 3 ? null : NumPages}
        {currentPage < pages.length - 1 && (
          <li>
            <button className={style.btn} onClick={nextPage}>
              &gt;
            </button>
          </li>
        )}
        {currentPage < pages.length - 1 && (
          <li>
            <button className={style.btn} onClick={lastPage}>&gt;&gt;</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
