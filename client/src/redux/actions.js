import axios from 'axios';

export function getCountries() { // it fetches all countries
    return async (dispatch) => {
        try {
            var res = await axios('http://localhost:3001/countries');
            return dispatch({type: "GET_COUNTRIES", payload: res.data});
        } catch(error){
            console.log(error);
        }
    };
};

export function getCountry(name) { // it fetches a country by name
    return async (dispatch) => {
        try {
            var res = await axios(`http://localhost:3001/countries?name=${name}`);
            // console.log(res);
            return dispatch({type: "GET_COUNTRY_NAME", payload: res.data});
        } catch(error){
            console.log(error);
        }
    };
};

export function getCountryById(id) { // it fetches a country by country code
    return async (dispatch) => {
        try {
            var res = await axios(`http://localhost:3001/countries/${id}`);
            return dispatch({type: "GET_COUNTRY_ID", payload: res.data});
        } catch(error){
            console.log(error);
        }
    };
};

export function reSetCountryDetails(){
    return {
        type: 'RESET_DETAILS'
    }
};

export function getCountryActivities() { // it fetches all countries along with their associated activities
    return async (dispatch) => {
        try {
            var res = await axios('http://localhost:3001/summary');
            return dispatch({type: "GET_COUNTRY_ACTIVITIES", payload: res.data});
        } catch(error){
            console.log(error);
        }
    };
};

export function reSetCountryActivities(){
    return {
        type: 'RELOAD'
    }
};

export function getActivities() { // returns all activities in the activity table, used in the filter
    return async (dispatch) => {
        try {
            var res = await axios('http://localhost:3001/activities');
            return dispatch({type: "GET_ACTIVITIES", payload: res.data});
        } catch(error){
            console.log(error);
        }
    };
};

export function postActivity(payload) { // it creates a new activity and associates it with a country
    return async () => {
        try {
            var res = await axios.post('http://localhost:3001/activities', payload);
            console.log(res);
            alert(res.data);
            return res;

        } catch(error){
            if(error.response) console.log(error.response.data);
            alert(error.response.data);
        }
    };
};

export function deleteActivity(payload) { // it deletes an activity and its associations
    return async () => {
        try {
            var res = await axios.delete('http://localhost:3001/delete?name=' + payload);
            console.log(res);
            alert(res.data);
            return res;
        } catch(error){
            if(error.response) console.log(error.response.data);
            alert(error.response.data);
        }
    };
};

export function filterByContinent(payload) {
    // console.log(payload);
    return {
        type: "FILTER_BY_CONTINENT", 
        payload
    }
};

export function filterByActivity(payload) {
    console.log(payload);
    return {
        type: "FILTER_BY_ACTIVITY",
        payload
    }
};

export function sortByCountryName(payload) {
    return {
        type: "SORT_BY_NAME",
        payload
    }
};

export function sortByPopulation(payload) {
    return {
        type: "SORT_BY_POPULATION",
        payload
    }
};
