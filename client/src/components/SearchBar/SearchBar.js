import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountry } from "../../redux/actions";
import styles from "./searchbar.module.css";

export function SearchBar({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  // const history = useHistory();
  // const [ , setParams ] = useState('');
  // const queryParams = new URLSearchParams(window.location.search);
  // let querySearch = queryParams.get('name');
  // console.log(querySearch);

  // useEffect(() => {
  //     if(querySearch) return dispatch(getCountry(querySearch));
  // //     setParams(querySearch ? querySearch : '');
  // }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // if(e.key == 'Enter'){
    //     dispatch(getCountry(name));
    //     setCurrentPage(1);
    // }
    // history.push('?name=' + name);
    setName(e.target.value);
    // setParams(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if(querySearch){
    //     dispatch(getCountry(querySearch));
    // }
    dispatch(getCountry(name));
    // console.log(getCountry(name))
    setCurrentPage(1);
    // history.push('?name=' + name);
  };

  // const handleOnKeyDown = (e) => {
  //     e.preventDefault();
  //     if(e.key === 'Enter'){
  //         dispatch(getCountry(name));
  //         // console.log(getCountry(name))
  //         setCurrentPage(1);
  //         // history.push('?name=' + name);
  //     }
  // };

  // useEffect(() => {
  //     queryParams.delete('name');
  //     history.replace({
  //         search: queryParams.toString()
  //     });
  //     setParams(querySearch);
  // }, [])

  // if(querySearch == null) {
  return (
    <form htmlFor="search" className={styles.searchBar} role="search">
      <input
        id="search"
        type="search"
        placeholder="Search by Name..."
        name="q"
        aria-label="Search through site content"
        onChange={(e) => handleSearch(e)}
      />
      <button
        className={styles.searchBarBtn}
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Go!
      </button>
    </form>
  );
  // } else {
  //     return(
  //         <div for = 'search' className = { styles.searchBar }>
  //             <input
  //                 id = 'search'
  //                 type = 'search'
  //                 value = { querySearch }
  //                 placeholder = 'Search Country by Name...'
  //                 onKeyDown = { (e) => handleOnKeyDown(e) }

  //             />
  //                 <button className = { styles.searchBarBtn } type = 'submit' onClick = { (e) => handleSubmit(e) }>Search</button>
  //         </div>
  //     );
  // }
}
