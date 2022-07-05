import React from "react";
import styles from './pagination.module.css';

export default function Pagination ({ countriesPerPage, allCountries, pagination }) {
    const pageNumbers = [];
    if(allCountries === 0) {
        return <h1>NO COUNTRIES FOUND!!</h1>;
    } else {
        for (let i = 1; i <= Math.ceil( ( allCountries + 1 ) / countriesPerPage ); i++) {
            // console.log(Math.ceil( ( allCountries ) / countriesPerPage ))
            pageNumbers.push(i);        
        }
    }

    return(
        <div className = { styles.center }>
            <ul className = { styles.pagination }>
                { 
                    pageNumbers && pageNumbers.map(number => (
                        <li className = 'number' key = { number }>
                            <a onClick = {() => pagination(number)}>{ number }</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}