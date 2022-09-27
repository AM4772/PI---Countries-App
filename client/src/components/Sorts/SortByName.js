import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterByContinent, sortByCountryName } from "../../redux/actions";
import styles from "./sortbyname.module.css";

export default function SortByName({ setOrder, setCurrentPage }) {
  const dispatch = useDispatch();

  const clear = (e) => {
    e.target.value = "";
  };

  function handleOrdChange(e) {
    e.preventDefault();

    if (e.target.value === "A-Z" || e.target.value === "Z-A") {
      dispatch(sortByCountryName(e.target.value));
      setCurrentPage(1);
      setOrder(e.target.value);
    }
    if (!e.nativeEvent.inputType) {
      e.target.blur();
    }
  }

  useEffect(() => {
    dispatch(filterByContinent);
  }, [dispatch]);

  return (
    <div>
      <input
        type="input"
        list="alph-sort"
        className={styles.name}
        onChange={(e) => handleOrdChange(e)}
        onClick={clear}
        onFocus={clear}
        placeholder="Sort Asc/Desc"
      />
      <datalist id="alph-sort">
        <option value="A-Z"></option>
        <option value="Z-A"></option>
      </datalist>
    </div>
  );
}
