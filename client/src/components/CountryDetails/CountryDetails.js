import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountryById, reSetCountryDetails } from "../../redux/actions";
import styles from "./countrydetails.module.css";

export default function CountryDetails(props) {
  const dispatch = useDispatch();
  const myCountry = useSelector((state) => state.countryById);
  /*   console.log(myCountry); */

  let population = parseFloat(myCountry.population).toLocaleString("en");
  let area = parseFloat(myCountry.area).toLocaleString("en");

  // let actArrayCheck = () => {
  //     if(myCountry.activities.length > 0){
  //         return true;
  //     } else {
  //         return false;
  //     }
  // }

  useEffect(() => {
    dispatch(getCountryById(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  useEffect(() => {
    return () => {
      dispatch(reSetCountryDetails());
    };
  }, []);

  return (
    <section className={styles.container}>
      <section className={styles.card_details_box}>
        <div className={styles.card_details_name}>
          <h3>Country Details</h3>
          {myCountry.name}
        </div>
        <img
          className={styles.card_details_img}
          src={myCountry.flag}
          alt="Country flag"
          title={myCountry.name}
          width="225"
          height="144"
        ></img>
        <div>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <button className={styles.card_details_button}>
              {" "}
              Back to Home{" "}
            </button>
          </Link>
        </div>
        {myCountry ? (
          <fieldset className={styles.card_details}>
            <legend className={styles.activity_title}>
              General Information
            </legend>
            <ul>
              <li className={styles.card_details_li}>
                Country ID: <span>{myCountry.id}</span>
              </li>
              <li className={styles.card_details_li}>
                Continent: <span>{myCountry.continent}</span>
              </li>
              <li className={styles.card_details_li}>
                Region: <span>{myCountry.subregion}</span>
              </li>
              <li className={styles.card_details_li}>
                Capital: <span>{myCountry.capital}</span>
              </li>
              <li className={styles.card_details_li}>
                Area km&sup2;: <span>{area}</span>
              </li>
              <li className={styles.card_details_li}>
                Population: <span>{population}</span>
              </li>
            </ul>
            <fieldset className={styles.activity_wrapper}>
              <legend className={styles.activity_title}>
                Tourist Activities
              </legend>
              {myCountry.activities?.map((a) => {
                // if(actArrayCheck()){
                return (
                  <ul className={styles.activity} key={a.id}>
                    <li>Activity: {a.name} </li>
                    <li>Difficulty: {a.difficulty} </li>
                    <li>Duration: {a.duration} </li>
                    <li>Season: {a.season} </li>
                    <li>Description: {a.description} </li>
                  </ul>
                );
              })}
            </fieldset>
          </fieldset>
        ) : (
          <span>Loading ...</span>
        )}
      </section>
    </section>
  );
}
