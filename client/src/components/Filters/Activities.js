import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountryActivities,
  filterByActivity,
  getActivities,
} from "../../redux/actions";
import styles from "./activities.module.css";

export default function Activities() {
  const dispatch = useDispatch();
  const [choice, setChoice] = useState();

  const allAct = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivities());
    dispatch(getCountryActivities());
  }, [dispatch]);

  let handleFilterByActivity = (e) => {
    e.preventDefault();
    if (e.target.value !== "All") {
      dispatch(filterByActivity(e.target.value));
      setChoice(e.target.value);
    } else {
      dispatch(getCountryActivities());
      setChoice(e.target.value);
    }
  };

  return (
    <div>
      <select
        value={choice}
        defaultValue={"default"}
        className={styles.activities}
        onChange={(e) => {
          handleFilterByActivity(e);
        }}
      >
        {" "}
        {/* console.log(allAct)*/}
        <option value="All" selected>
          All Activities
        </option>
        {allAct.map((i) => {
          // (console.log(i.name))
          return (
            <option key={i.name} value={i.name}>
              {" "}
              {i.name.toLowerCase()}{" "}
            </option>
          );
        })}
      </select>
    </div>
  );
}
