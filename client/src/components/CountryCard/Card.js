import React from "react";
import { Link } from "react-router-dom";
import styles from "./cards.module.css";

let Card = ({ flag, name, id, continent }) => {
  if (flag && name && id && continent) {
    return (
      // the Link below appears on the Card and it links to CountryDetails
      <article className={styles.card}>
        <figure>
          <figcaption className={styles.top}>
            {" "}
            <strong>{name}</strong>{" "}
          </figcaption>
          <img src={flag} alt="flag not found" />
          <figcaption className={styles.bottom}> {continent} </figcaption>
          <Link to={`/countries/${id}`} className={styles.details}>
            {" "}
            See More...{" "}
          </Link>
        </figure>
      </article>
    );
  } else {
    return "No country found with that name.";
  }
};

export default Card;

/* let Card = ( { flag, name, id, continent } ) => {

    if( flag && name && id && continent ) {
        return( // the Link below appears on the Card and it links to CountryDetails
            <div className = { styles.card }>
                <img className = { styles.card__image } src = { flag } alt = 'flag not found' />
                    <Link to = {`/countries/${ id }`}> { name } </Link> 
                    <p>{ continent }</p>      
            </div> 
        );
    } else {
        return 'No country found with that name.'
    }
}; */
