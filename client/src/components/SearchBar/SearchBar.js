import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountry } from "../../redux/actions";
import styles from './searchbar.module.css';

export default function SearchBar (){
    const dispatch = useDispatch();
    const [ name, setName ] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        setName(e.target.value);
        //console.log(name);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getCountry(name));
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