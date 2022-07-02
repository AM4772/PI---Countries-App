import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountryById, reSetCountryDetails } from '../../redux/actions';

export default function CountryDetails(props) {
    // console.log(props);
    const dispatch = useDispatch();
    const myCountry = useSelector((state) => state.countryById);
    //console.log(myCountry);
    useEffect(() => {
        dispatch(getCountryById(props.match.params.id));
    }, [dispatch, props.match.params.id]);

    useEffect(() => {
        return () => { 
            dispatch(reSetCountryDetails());
        }
    }, []);

    return(
        <div>
            {
                myCountry ?
                <div>
                    <h1>Country: { myCountry.name }</h1>
                    <h1>Country Code: { myCountry.id }</h1>
                    <img src = { myCountry.flag } alt = '' width = '300px' height = '200px'></img>
                    <h1>Continent: { myCountry.continent }</h1>
                    <h2>Region: { myCountry.subregion }</h2>
                    <h3>Capital: { myCountry.capital }</h3>
                    <h4>Area km2: { myCountry.area }</h4>
                    <h4>Population: { myCountry.population }</h4>
                    <h5>{ myCountry.activities?.map( (a) => {
                            return(
                                <div key = { a.id }>
                                    <a>Activity: { a.name } </a>
                                    <a>Difficulty: { a.difficulty } </a>
                                    <a>Duration: { a.duration } </a>
                                    <a>Season: { a.season } </a>
                                    <a>Description: { a.description } </a>
                                </div>
                            )})
                    }</h5>
                </div> : <p>Loading...</p>
            }
            <Link to = '/home'>
                <button> Back to Home </button>
            </Link>
        </div>
    )
};