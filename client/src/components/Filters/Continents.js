import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountryActivities, filterByContinent } from '../../redux/actions';
import styles from './continents.module.css';

export function Continents ({ setCurrentPage }){
    const dispatch = useDispatch();
    const [ choice, setChoice ] = useState();

    let handleFilterByContinent = (e) => {
        e.preventDefault();
        if(e.target.value === 'All'){
            dispatch(getCountryActivities());
        } else {
            dispatch(filterByContinent(e.target.value));
            setCurrentPage(1);
            setChoice('default');
        }
    }    

    return (
        <div>
            <select
                value = { choice }
                defaultValue = { 'default' }
                className = { styles.continents }
                onChange = { (e) => { handleFilterByContinent(e) } }
            >
                <option value = { 'default' } disabled>Select Continent</option>
                <option value = 'All'>All Continents</option>
                <option value = 'Africa'>Africa</option>
                <option value = 'Americas'>Americas</option>
                <option value = 'Antarctic'>Antartica</option>
                <option value = 'Asia'>Asia</option>
                <option value = 'Europe'>Europe</option>
                <option value = 'Oceania'>Oceania</option>
            </select>
        </div>
    );
};
