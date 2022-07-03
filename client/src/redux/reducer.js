const initialState = {
    countries: [],
    countryById: {},
    countryActivities: [],
    activities: [],
    // loading: true,
};

function reducer( state = initialState, { type, payload } ) {
    switch (type){
        case "GET_COUNTRIES":
            return {
                ...state,
                countries: payload,
            }
        case "GET_COUNTRY_NAME":
            return {
                ...state,
                countries: payload,
                countryActivities: payload
            }
        case "GET_COUNTRY_ID":
            return {
                ...state,
                countryById: payload
            }
        case "RESET_DETAILS":
            return {
                ...state,
                countryById: {}
            }
        case "GET_COUNTRY_ACTIVITIES":
            return {
                ...state,
                countryActivities: payload,
                countries: payload
            }
        case "RESET_COUNTRY_ACTIVITIES":
            return {
                countryActivities: []
            }
        case "GET_ACTIVITIES": // used in the filter by activity
            return {
                ...state,
                activities: payload
            }
        case "POST_ACTIVITY":
            return {
                ...state
            }
        case "FILTER_BY_CONTINENT": // filter countries by continent
            const allCountries = state.countries;
            const continentFiltered = payload === 'All' ? allCountries : allCountries.filter((t) => t.continent === payload);
            return {
                ...state,
                countryActivities: continentFiltered,
                countries: continentFiltered
            }
        case "FILTER_BY_ACTIVITY": // filter countries by activity
            const all = state.countries; // all countries array (includes actvities array)
            // console.log(all);
            const allFilteredByAct = payload === 'all-activities' ? all.filter( (a) => a.activities.length > 0) : all.filter( (t) => t.activities && t.activities.map( (b) => b.name ).includes(payload));
            // console.log(allFilteredByAct);
            return {
                ...state,
                countries: allFilteredByAct,
                countryActivities: allFilteredByAct

            }
        case "SORT_BY_NAME":
            const sortOrder = payload === 'asc' ? state.countryActivities.sort( (a, b) => a.name.localeCompare(b.name) ) : state.countryActivities.sort( (a, b) => b.name.localeCompare(a.name) );
            return {
                ...state,
                countryActivities: sortOrder
            }
        case "SORT_BY_POPULATION":
            const sortPopulation = payload === 'Low' ? state.countryActivities.sort( (a, b) => a.population - b.population ) : state.countryActivities.sort( (a, b) => b.population - a.population );
            return {
                ...state,
                countryActivities: sortPopulation
            }
        case "SWITCH_LOADING":
            return {
                ...state,
                loading: payload
            }
        default: return state;
    }
};

export default reducer;