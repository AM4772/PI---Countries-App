import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterByContinent, sortByPopulation } from "../../redux/actions";
import styles from "./sortbypopulation.module.css";

export default function SortByPropulation({ setOrder, setCurrentPage }) {
  const dispatch = useDispatch();

  const clear = (e) => {
    e.target.value = "";
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value === "Low" || e.target.value === "High") {
      dispatch(sortByPopulation(e.target.value));
      setCurrentPage(1);
      setOrder(e.target.value);
    }
    if (!e.nativeEvent.inputType) {
      e.target.blur();
    }
  };

  useEffect(() => {
    dispatch(filterByContinent);
  }, [dispatch]);

  return (
    <div>
      <input
        type="input"
        list="population-sort"
        className={styles.pop}
        onChange={(e) => handleChange(e)}
        onClick={clear}
        onFocus={clear}
        placeholder="Sort by Population"
      />
      <datalist id="population-sort">
        <option value="Low"></option>
        <option value="High"></option>
      </datalist>
    </div>
  );
}
