import React from 'react';
import { useDispatch } from 'react-redux';
import { getCountryActivities, filterByContinent, reSetCountryActivities } from '../../redux/actions';
import styles from './continents.module.css';

export function Continents ({ setCurrentPage }){
    const dispatch = useDispatch();    

    let handleFilterByContinent = (e) => {
        e.preventDefault();
        if(e.target.value === 'All'){
            dispatch(getCountryActivities());
        } else {
            dispatch(filterByContinent(e.target.value));
            setCurrentPage(1);
            // dispatch(reSetCountryActivities());
        }
    }

    return (
        <div>
            <select
                className = { styles.continents }
                onChange = { (e) => { handleFilterByContinent(e) } }
            >
                <option value = 'All'>Filter by Continent</option>
                <option value = 'All' defaultValue>All</option>
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
