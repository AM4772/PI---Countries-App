import React from "react";
import { useDispatch } from "react-redux";
import { getCountryActivities, sortByPopulation } from '../../redux/actions';
import styles from './sortbypopulation.module.css'

export default function SortByPropulation( { setOrder, setCurrentPage } ) {
    const dispatch = useDispatch();    
    
    const handleChange = (e) => {
        e.preventDefault();
        if(e.target.value !== "all"){
            dispatch(sortByPopulation(e.target.value));
            setCurrentPage(1);                                                                  
            setOrder(e.target.value); 
        } else {
            dispatch(getCountryActivities())}
            setCurrentPage(1);                                                                  
            setOrder(e.target.value);
    };    //Setea=>estado vacio=>ordenado    
    
        return(
            <div>
                <div> 
                    <select 
                        className = { styles.pop }    
                        onChange={e => handleChange(e)}
                    >
                        <option value = 'all' key='all'> Sort By Population </option>
                        <option value = 'Low' key= 'low'> Lowest-to-Highest </option>
                        <option value = 'High' key= 'high'> Highest-to-Lowest </option>
                    </select>
                </div>
            </div>
        )
};