import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getCountryActivities, getActivities, reSetCountryDetails } from '../../redux/actions';
import Card from '../CountryCard/Card';
import Pagination from '../Pagination/Pagination';
import { Continents } from '../Filters/Continents';
import SortByName from '../Sorts/SortByName';
import SortByPropulation from '../Sorts/SortByPopulation';
import styles from '../Home/home.module.css'
import Activities from '../Filters/Activities';
import Navbar from '../Nav/NavBar';
import Loading from '../Loading/Loading';
import Footer from '../Footer/Footer';
import { SearchBar } from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

export default function Home(){
    const dispatch = useDispatch();
    //const allCountries = useSelector((state) => state.countries);
    const allCountries = useSelector((state) => state.countryActivities);
    // const oneCountry = useSelector((state) => state.countries);
    // declaro un estado local y paso la pagina actual (arranca en 1) + cual va a ser la pagina actual
    const [currentPage, setCurrentPage] = useState(1); 
    // declaro otro estado local y paso 10 paises por pag
    const [countriesPerPage] = useState(8);
    // seteo el index del ultimo pais en la pagina actual en funcion de la pagina en la cual me encuentro
    // const indexOfLastCountry = currentPage === 1 ? 9 : currentPage * countriesPerPage - 1; // para PI
    const indexOfLastCountry = currentPage * countriesPerPage;
    // seteo el index del primer pais en la pagina actual en funcion de la pagina en la cual me encuentro
    // const indexOfFirstCountry = currentPage === 1 ? 0 : indexOfLastCountry - countriesPerPage; // para PI
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    // setea los paises actuales que se deben renderizar en la pagina seleccionada
    const currentCountries = allCountries.slice(indexOfFirstCountry,indexOfLastCountry);

    const [ order, setOrder ] = useState('');
    const [ loading, setLoading ] = useState(true);

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => { 
        dispatch(getActivities());
        dispatch(getCountries());
        dispatch(getCountryActivities());
        dispatch(reSetCountryDetails());
    }, [dispatch]);

    let handleReload = (e) => {
        e.preventDefault();
        dispatch(getCountryActivities());
    }

    return(
        <div>
            { loading === true? (<Loading setLoading = { setLoading } />) :
        <section id = { styles.showcase }> 
            <Navbar />
            <header className = { styles.header }>
                <div className = { styles.container }>
                    <div>
                        <h1>HENRY Bootcamp - Individual Project - Countries App</h1>
                    </div>
                </div>
            </header>
                    <div>
                        <button className = { styles.reloadBtn } onClick = { (e) => { handleReload(e) } }>
                            RELOAD COUNTRIES
                        </button>
                    </div>
                    <section className = { styles.actions }>
                        <div>
                            <SearchBar setCurrentPage = { setCurrentPage } />
                        </div>
                        <div>
                            <Continents setCurrentPage = { setCurrentPage } />
                        </div>
                        <div>
                            <Activities setCurrentPage = { setCurrentPage } />
                        </div>
                        <div>
                            <SortByName setOrder = { setOrder } setCurrentPage = { setCurrentPage } />
                        </div>
                        <div>
                            <SortByPropulation setOrder = { setOrder } setCurrentPage = { setCurrentPage } />
                        </div>
                    </section>
                    <br/>           
                        <Pagination
                            countriesPerPage = { countriesPerPage }
                            allCountries = { allCountries.length }
                            pagination = { pagination }
                        />
                    <div>
                        {
                            currentCountries && currentCountries.map( (c) => {
                                return(
                                    <div className = { styles.card_wrapper } key = { c.id }>
                                        <Link to = { '/countries/'+ c.id }>
                                            <Card 
                                                flag = { c.flag } 
                                                name = { c.name } 
                                                id = { c.id } 
                                                continent = { c.continent } 
                                                key = { c.id }
                                            />
                                        </Link>
                                    </div>
                                );
                            })
                        };
                    </div>

        </section>
        }
        <Footer />    
        </div>
             
    );
}
