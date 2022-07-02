import React from "react";
import { Link } from 'react-router-dom';
import styles from './cards.module.css';

let Card = ( { flag, name, id, continent }) => {
    return(
        <div className = { styles.card }>
            <img className = { styles.card__image } src = { flag } alt = 'flag not found' />
                <Link to = {`/countries/${ id }`}>
                { name }       
                </Link>
                <p>{ continent }</p>      
        </div> 
    );
};

export default Card;