const initialState = {
    countries: [],
    countryById: {},
    countryActivities2: [],
    countryActivities: [],
    countryActivities3: [],
    activities: []
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
                countryActivities3: payload,
                countryActivities2: payload,
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
                countryActivities2: payload,
                countryActivities3: payload
            }
        case "RELOAD":
            return {
                ...state,
                countryActivities: []
            }
        case "GET_ACTIVITIES": // used in the filter by activity
            return {
                ...state,
                activities: payload,
            }
        case "POST_ACTIVITY":
            return {
                ...state
            }
        case "DELETE_ACTIVITY":
            return {
                ...state
            }
        case "FILTER_BY_CONTINENT": // filter countries by continent
            let allCountries = state.countryActivities3; // all countries array
                // console.log(all);
            const continentFiltered = payload === 'All' ? allCountries : allCountries.filter((t) => t.continent === payload);
            return {
                ...state,
                countryActivities2: continentFiltered,
                countryActivities: continentFiltered,
            }
        case "FILTER_BY_ACTIVITY": // filter countries by activity
            let all = state.countryActivities2; // all countries array
                // console.log(all);
            const allFilteredByAct = payload === 'all-activities' ? all.filter( (a) => a.activities.length > 0) : all.filter( (t) => t.activities && t.activities.map( (b) => b.name ).includes(payload));
            // console.log(allFilteredByAct);
            return {
                ...state,
                countryActivities: allFilteredByAct,
                countryActivities3: allFilteredByAct

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
        default: return state;
    }
};

export default reducer;