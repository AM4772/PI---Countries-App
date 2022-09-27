import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  getCountryActivities,
  getActivities,
  reSetCountryDetails,
} from "../../redux/actions";
import Card from "../CountryCard/Card";
import Pagination from "../Pagination/Pagination";
import { Continents } from "../Filters/Continents";
import SortByName from "../Sorts/SortByName";
import SortByPropulation from "../Sorts/SortByPopulation";
import styles from "../Home/home.module.css";
import Activities from "../Filters/Activities";
import Navbar from "../Nav/NavBar";
import Loading from "../Loading/Loading";
import Footer from "../Footer/Footer";
import { SearchBar } from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  //const allCountries = useSelector((state) => state.countries);
  const allCountries = useSelector((state) => state.countryActivities);
  // const oneCountry = useSelector((state) => state.countries);
  // declaro un estado local y paso la pagina actual (arranca en 1) + cual va a ser la pagina actual
  const [currentPage, setCurrentPage] = useState(1);
  // declaro otro estado local y paso 10 paises por pag
  const [countriesPerPage] = useState(10);
  // seteo el index del ultimo pais en la pagina actual en funcion de la pagina en la cual me encuentro
  // const indexOfLastCountry = currentPage === 1 ? 9 : currentPage * countriesPerPage - 1; // para PI

  const indexOfLastCountry = currentPage * countriesPerPage;
  // seteo el index del primer pais en la pagina actual en funcion de la pagina en la cual me encuentro
  // const indexOfFirstCountry = currentPage === 1 ? 0 : indexOfLastCountry - countriesPerPage; // para PI
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  // setea los paises actuales que se deben renderizar en la pagina seleccionada
  const currentCountries = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  // | SORTING STATE //
  const [order, setOrder] = useState("");

  // | LOADING STATE //
  const [loading, setLoading] = useState(true);

  // | CHANGE PAGE //
  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const pagination = (pageNumber) => {
    setCurrentPage(Number(pageNumber));
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
  };

  return (
    <section className={styles.showcase}>
      {loading === true ? (
        <Loading setLoading={setLoading} />
      ) : (
        <section>
          <header className={styles.header}>
            <h1>Countries App</h1>
            <Navbar />
          </header>
          <main>
            <div>
              <button
                className={styles.reloadBtn}
                onClick={(e) => {
                  handleReload(e);
                }}
              >
                RELOAD COUNTRIES
              </button>
            </div>
            <section className={styles.actions}>
              <ul>
                <li>
                  <SearchBar setCurrentPage={setCurrentPage} />
                </li>
                <li>
                  <Continents setCurrentPage={setCurrentPage} />
                </li>
                <li>
                  <Activities setCurrentPage={setCurrentPage} />
                </li>
                <li>
                  <SortByName
                    order={order}
                    setOrder={setOrder}
                    setCurrentPage={setCurrentPage}
                  />
                </li>
                <li>
                  <SortByPropulation
                    setOrder={setOrder}
                    setCurrentPage={setCurrentPage}
                  />
                </li>
              </ul>
            </section>
            <Pagination
              currentPage={currentPage}
              countriesPerPage={countriesPerPage}
              allCountries={allCountries.length}
              pagination={pagination}
              maxPageNumberLimit={maxPageNumberLimit}
              minPageNumberLimit={minPageNumberLimit}
              handleNextbtn={handleNextbtn}
              handlePrevbtn={handlePrevbtn}
            />
            <article>
              {currentCountries &&
                currentCountries.map((c) => {
                  return (
                    <div className={styles.card_wrapper} key={c.id}>
                      {/* <Link to={"/countries/" + c.id}> */}
                      <Card
                        flag={c.flag}
                        name={c.name}
                        id={c.id}
                        continent={c.continent}
                        key={c.id}
                      />
                      {/* </Link> */}
                    </div>
                  );
                })}
            </article>
          </main>
          <Footer />
        </section>
      )}
    </section>
  );
}
