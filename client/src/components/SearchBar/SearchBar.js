import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountry } from "../../redux/actions";

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
        <div>
            <input
            type = 'search'
            placeholder = 'Search Country by Name...'
            onChange = { (e) => handleSearch(e) }
            />
            <button type = 'submit' onClick = { (e) => handleSubmit(e) }>Search</button>
        </div>
    );
};