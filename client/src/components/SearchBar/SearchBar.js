import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { Link, useHistory, useLocation } from 'react-router-dom';
import { getCountry } from "../../redux/actions";
import styles from './searchbar.module.css';

export default function SearchBar ({ setCurrentPage }){
    const dispatch = useDispatch();
    const [ name, setName ] = useState('');
    // const [ params, setParams ] = useState();
    // const location = useLocation();
    // const history = useHistory();
    // useEffect(() => {
    //     const queryParams = new URLSearchParams(location.search);
    //     const querySearch = queryParams.get('name');
    //     name = querySearch;
    //     if(!querySearch) return dispatch(getCountry(name));
    //     queryParams.delete('name');  
    //     history.replace({
    //         search: queryParams.toString()
    //     });
    //     setParams(querySearch);
    // }, [dispatch]);
    
    const handleSearch = (e) => {
        e.preventDefault();
            setName(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // if(!params){
            dispatch(getCountry(name));   
            setCurrentPage(1);
        // } else {
        //     dispatch(getCountry(params));
        //     // setCurrentPage(1);  
        // }
    };

    return(
        <div for = 'search' className = { styles.searchBar }>
            <input
                id = 'search'
                type = 'search'
                placeholder = 'Search Country by Name...'
                onChange = { (e) => handleSearch(e) }
            />
                <button className = { styles.searchBarBtn } type = 'submit' onClick = { (e) => handleSubmit(e) }>Search</button>
        </div>
    );
};