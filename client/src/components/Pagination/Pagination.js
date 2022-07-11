import React, { useState } from "react";
import styles from './pagination.module.css';

export default function Pagination ({ countriesPerPage, allCountries, pagination }) {
    const pageNumbers = [];
    if(allCountries === 0) {
        return <h1>NO COUNTRIES FOUND!!</h1>;
    } else {
        // for (let i = 1; i <= Math.ceil( ( allCountries + 1 ) / countriesPerPage ); i++) { // para PI
        for (let i = 1; i <= Math.ceil( allCountries / countriesPerPage ); i++) {
            pageNumbers.push(i);        
        }
    }

    return(
        <div className = { styles.center }>
            <ul className = { styles.pagination }>
                { 
                    pageNumbers && pageNumbers.map(number => (
                        <li key = { number }>
                            <a onClick = {() => pagination(number)}>{ number }</a>
                        </li>                        
                    ))
                }
            </ul>
        </div>
    )
}

// --------- PAGINATION WITH PREV AND NEXT (it works +/-, it does not change strictly to next or prev, random
// --------- cards are rendered without a flag and misaligned)
//----------------------------------------------------------------------------------------------------------
// export default function Pagination ({ countriesPerPage, allCountries, pagination }) {
//     const [ currentPage, setCurrentPage ] = useState(0);
//     console.log(allCountries);
//     const pageNumbers = [];
//     if(allCountries === 0) {
//         return <h1>NO COUNTRIES FOUND!!</h1>;
//     } else {
//         for (let i = 1; i <= Math.ceil( ( allCountries + 1 ) / countriesPerPage ); i++) {
//             pageNumbers.push(i);        
//         }
//     }

//     return(
//         <div className = { styles.center }>
//             <ul className = { styles.pagination }>
//                 { pageNumbers.includes(currentPage - 1) && <a onClick = {() => {
//                     setCurrentPage(currentPage - 1);
//                     pagination(currentPage - 1);
//                 }}> 
//                    Prev 
//                 </a>}
//                 { 
//                     pageNumbers && pageNumbers.map(number => (
//                         <li key = { number }>
//                             <a onClick = {() => pagination(number)}>{ number }</a>
//                         </li>                        
//                     ))
//                 }
//                 { pageNumbers.includes(currentPage + 1) && <a onClick = {() => {
//                     setCurrentPage(currentPage + 1);
//                     pagination(currentPage + 1);
//                 }}> 
//                    Next 
//                 </a>}
//             </ul>
//         </div>
//     )
// }