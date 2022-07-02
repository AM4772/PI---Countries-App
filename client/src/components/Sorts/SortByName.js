import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import { filterByContinent, getCountryActivities, sortByCountryName } from '../../redux/actions';
//import styles from './order.module.css'

export default function SortByName({setOrder, setCurrentPage}){                                         
    const dispatch = useDispatch();
 
    function handleOrdChange(e) {
        e.preventDefault()
        if(e.target.value !== "all") {
            dispatch(sortByCountryName(e.target.value))
            setCurrentPage(1)                                                                   
            setOrder(e.target.value)
        } else {
            dispatch(getCountryActivities())
            setCurrentPage(1)                                                                   
            setOrder(e.target.value)
        } //Setea=>estado vacio=>ordenado dependiento del value
    };

    useEffect(() =>{
        dispatch(filterByContinent)
    },[dispatch])
    
    return (
        <div> 
            <div>
            <select onChange={e => handleOrdChange(e)}>
                <option  value = 'all' key = 'all'> Sort By Name </option>
                <option value = 'asc' key = 'asc'> A - Z </option>
                <option value = 'desc' key= 'desc'> Z - A </option>
            </select>
            </div> 
        </div>
    )
};