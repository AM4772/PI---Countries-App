import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountryActivities, filterByContinent } from "../../redux/actions";
import styles from "./continents.module.css";

export function Continents({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [choice, setChoice] = useState();

  let handleFilterByContinent = (e) => {
    e.preventDefault();
    if (e.target.value === "All") {
      dispatch(getCountryActivities());
    } else {
      dispatch(filterByContinent(e.target.value));
      setCurrentPage(1);
      setChoice(choice);
    }
  };

  return (
    <div>
      <select
        name="continents"
        value={choice}
        className={styles.continents}
        onChange={(e) => {
          handleFilterByContinent(e);
        }}
        required
      >
        <option value="All" selected>
          All Continents
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Antarctic">Antartica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
