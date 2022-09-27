import React from "react";
import styles from "./pagination.module.css";

export default function Pagination({
  currentPage,
  countriesPerPage,
  allCountries,
  pagination,
  maxPageNumberLimit,
  minPageNumberLimit,
  handleNextbtn,
  handlePrevbtn,
  order,
}) {
  const pageNumbers = [];
  if (allCountries === 0) {
    return <h1>NO COUNTRIES FOUND!!</h1>;
  } else {
    // for (let i = 1; i <= Math.ceil( ( allCountries + 1 ) / countriesPerPage ); i++) { // para PI
    for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
      pageNumbers.push(i);
    }
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      if (number === currentPage) {
        return (
          <li
            key={number}
            id={number}
            onClick={() => pagination(number)}
            className={styles.active}
          >
            {number}
          </li>
        );
      } else if (currentPage !== number) {
        return (
          <li key={number} id={number} onClick={() => pagination(number)}>
            {number}
          </li>
        );
      }
    }
    return null;
  });

  let pageIncrementBtn = null;
  if (pageNumbers.length === 1) {
    pageIncrementBtn = null;
  } else if (pageNumbers.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  return (
    <div>
      <ul className={styles.pagination}>
        <button
          onClick={handlePrevbtn}
          disabled={currentPage === pageNumbers[0] ? true : false}
        >
          <span>Prev</span>
        </button>

        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}

        <button
          onClick={handleNextbtn}
          disabled={
            currentPage === pageNumbers[pageNumbers.length - 1] ? true : false
          }
        >
          <span>Next</span>
        </button>
      </ul>
    </div>
  );
}

/* if (order === "A-Z" || order === "Z-A") {
  return (
    <li
      key={number}
      id={number}
      onClick={() => pagination((number = 1))}
      className={styles.active}
    >
      {(number = 1)}
    </li>
  );
} else */
