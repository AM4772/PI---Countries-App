import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountryById, reSetCountryDetails } from '../../redux/actions';
import styles from './countrydetails.module.css';

export default function CountryDetails(props) {
    // console.log(props);
    const dispatch = useDispatch();
    const myCountry = useSelector((state) => state.countryById);
    console.log(myCountry);
    useEffect(() => {
        dispatch(getCountryById(props.match.params.id));
    }, [dispatch, props.match.params.id]);

    useEffect(() => {
        return () => { 
            dispatch(reSetCountryDetails());
        }
    }, []);

    return(
        <section id = { styles.showcase }>
            <div className = { styles.card_details_wrapper }>
                    <div>
                        <Link to = '/home' style = {{ textDecoration: 'none'}}>
                            <button className = { styles.card_details_button }> Back to Home </button>
                        </Link>
                    </div>
                    <img className = { styles.card_details_img } src = { myCountry.flag } alt = '' width = '300px' height = '200px'></img>
                {
                    myCountry ?
                    <div className = { styles.card_details }>
                        <div className = { styles.card_details_name }>Country: { myCountry.name }</div>
                        <p className = { styles.card_details_p }>Country ID: { myCountry.id }</p>

                        <p className = { styles.card_details_p }>Continent: { myCountry.continent }</p>
                        <p className = { styles.card_details_p }>Region: { myCountry.subregion }</p>
                        <p className = { styles.card_details_p }>Capital: { myCountry.capital }</p>
                        <p className = { styles.card_details_p }>Area km2: { myCountry.area }</p>
                        <p className = { styles.card_details_p }>Population: { myCountry.population }</p>
                        <div className = { styles.activity_title }> Tourist Activities: </div>
                        <div className = { styles.activity_wrapper }>
                            { 
                                myCountry.activities?.map( (a) => {
                                    return(
                                        <ul className = { styles.activity } key = { a.id }>
                                            <li>Activity: { a.name } </li>
                                            <li>Difficulty: { a.difficulty } </li>
                                            <li>Duration: { a.duration } </li>
                                            <li>Season: { a.season } </li>
                                            <li>Description: { a.description } </li>
                                        </ul>
                                )})
                            }
                        </div>
                    </div> : <p>Loading...</p>
                }
                <br/>
            </div>
        </section>
    )
};