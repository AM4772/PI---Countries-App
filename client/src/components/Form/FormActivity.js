import { React, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postActivity, getCountries } from '../../redux/actions';
import Navbar from '../Nav/NavBar';
import styles from './form.module.css';
import Loading from '../Loading/Loading';

const Validation = (state) => {
    let errors = {};
    if(state.selectedCountries.length < 1){
        errors.selectedCountries = 'Country is a required field, please select at least 1 country.';
    } else if(!state.name){
        errors.name = 'Activity name is required.';
    } else if(isNaN(state.name) !== true){
        errors.name = 'Activity name cannot be a number.';
    } else if(state.name.length > 140){
        errors.name = 'Keep length to a max of 140 characters.';
    } else if(!state.difficulty){
        errors.difficulty = 'Difficulty is a required field, please select one.';
    } else if(!state.duration){
        errors.duration = 'Duration is a required field.';
    } else if(state.duration.length > 9){
        errors.duration = 'Exceeded character length (max 9).';
    }else if(!state.duration.includes('hour')){
        errors.duration = 'Please set duration in hours and include the word "hour" or "hours".';
    }  else if(!state.season){
        errors.season = 'Season is a required field, please select one.';
    } else if(!state.description){
        errors.description = 'Description is a required field, please write a brief description.';
    } else if(state.description.length > 255){
        errors.description = 'Description length exceeded. Max length is 255 characters.';
    }
    return errors;
};

export default function CreateActivity() {
    const dispatch = useDispatch();
    const history = useHistory();
    const countries = useSelector((state) => state.countries);
    const [ state, setState ] = useState({
        name: '',
        difficulty: 'Select',
        duration: '',
        season: '',
        description: '',
        selectedCountries: []
    });
    const [ errors, setErrors ] = useState({});
    const [ loading, setLoading ] = useState(true);

    function handleChange(e) {
        setState({
            ...state,
            [ e.target.name ]: e.target.value
        })
        // console.log(state);
    };

    function handleSelect(e) {
        e.preventDefault();
        if(!state.selectedCountries.includes(e.target.value) && e.target.value !== 'country'){
            setState({
                ...state,
                selectedCountries: [ ...state.selectedCountries, e.target.value]
            });
        } else {
            return alert('You have already added this country to the list. Please select another country or continue filling out the form.');
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(state);
        setErrors(Validation(state));
        const saveErrors = Validation(state);
        if(Object.values(saveErrors).length !== 0 || state.selectedCountries.length < 1){
            alert('Please, complete all fields before submitting.');
            history.push('/activity');
            setState({
                name: '',
                difficulty: 'Select',
                duration: '',
                season: '',
                description: '',
                selectedCountries: []
            })
        } else {
            dispatch(postActivity(state));
            setState({
                name: '',
                difficulty: 'Select',
                duration: '',
                season: '',
                description: '',
                selectedCountries: []
            })
            history.push('/home');
        }
    };

    function handleDelete(c) {
        setState({
            ...state,
            selectedCountries: state.selectedCountries.filter( el => el !== c)
        })
    }

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    return(
        <div>
            { loading === true? (<Loading setLoading = { setLoading }/>) :
        <section id = { styles.showcase }>
            <Navbar />
            <div className = { styles.form_container }>
                <Link to = '/home'><button className = { styles.form_button } >Back to Home</button></Link>
                <h1 className = { styles.form_container_h1 }>Create a new activity!!</h1>
                <form id = 'act_form' className = { styles.my_form } onSubmit = { (e) => handleSubmit(e) }>
                    <div>
                        <label for = 'countries'>Countries...*  </label>
                        <select 
                            id = 'countries'
                            required = 'required'
                            onChange = { (e) => handleSelect(e) }
                            >
                            <option>Select a country (min required 1)</option>
                            { 

                                countries.map( (c) => (

                                    <option value = { c.name }>{ c.name }</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <label for = 'act_name'>Activity name*: </label>
                        <textarea
                            id = 'act_name'
                            type = 'text'
                            value = { state.name }
                            name = 'name'
                            required = 'required'
                            onChange = { (e) => handleChange(e) }
                            placeholder = 'Surfing in Maui, Hawai'
                        ></textarea>
                            {errors.name && (
                                <p>{errors.name}</p>
                            )}
                    </div>
                    <div>
                        <label for = 'act_difficulty'>Difficulty*: </label>
                        <select
                            id = 'act_difficulty'    
                            type = 'number'
                            value = { state.difficulty }
                            name = 'difficulty'
                            required = 'required'
                            onChange = { (e) => handleChange(e) }
                        >
                            <option value = 'Select'>Select...</option>
                            <option value = {1} defaultValue> 1 (piece of cake!)</option>
                            <option value = {2}> 2 (half a piece of cake!)</option>
                            <option value = {3}> 3 (fifty, fifty)</option>
                            <option value = {4}> 4 (now we are talking!)</option>
                            <option value = {5}> 5 (check your pulse!)</option>
                        </select>
                            {errors.difficulty && (
                                <p>{errors.difficulty}</p>
                            )}
                    </div>
                    <div>
                        <label for = 'act_duration'>Duration (in hours, text field)*: </label>
                        <textarea
                            id = 'act_duration'
                            type = 'text'
                            maxLength = { 9 }
                            value = { state.duration }
                            name = 'duration'
                            required = 'required'
                            onChange = { (e) => handleChange(e) }
                            placeholder = 'Xmpl: 2 hours'
                        ></textarea>
                            {errors.duration && (
                                <p>{errors.duration}</p>
                            )}
                    </div>
                    <div>
                        <label for = 'act_season'>Season*: </label>
                            <select
                                id = 'act_season'
                                type = 'text'
                                value = { state.season }
                                name = 'season'
                                required = 'required'
                                onChange = { (e) => handleChange(e) }
                            >
                                <option value  = ''>Select...</option>    
                                <option value = { 'Any' } defaultValue> Any </option>
                                <option value = { 'Summer' }> Summer </option>
                                <option value = { 'Fall' }> Fall </option>
                                <option value = { 'Winter' }> Winter </option>
                                <option value = { 'Spring' }> Spring </option>
                            </select>
                                {errors.season && (
                                    <p>{errors.season}</p>
                                )}
                    </div>
                    <div>
                        <label for = 'act_descript'>Brief description*: </label>
                        <textarea
                            id = 'act_descript'
                            rows = '5'
                            cols = '25'
                            type = 'text'
                            maxLength = { 255 }
                            value = { state.description }
                            name = 'description'
                            required = 'required'
                            placeholder = 'A stroll thru Central Park, Manhattan....'
                            onChange = { (e) => handleChange(e) }
                        >
                        </textarea>
                            {errors.description && (
                                <p>{errors.description}</p>
                            )}
                    </div>
                    <br/>
                    <button id = 'sendBtn' className = { styles.form_send } type = 'submit'>CREATE ACTIVITY</button>
                    <br/>
                </form>
            </div>
            <div id = { styles.selected }>
            { 
                state.selectedCountries.map((c) => 
                    <div className = { styles.selected_wrap }>
                        <p className = { styles.selected_p }>{c}</p>
                        <button className = { styles.selected_btn } onClick = {() => handleDelete(c)}> x </button>
                    </div>
                )
            }
            {   errors.selectedCountries && (
                    <p>{errors.selectedCountries}</p>
            )}
            </div>
        </section>
        } 
        </div>
    )
};