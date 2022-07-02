import { React, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postActivity, getCountries } from '../../redux/actions';
import styles from '../NewActivity/form.module.css';


const Validation = (state) => {
    let errors = {};
    if(state.selectedCountries.length < 1){
        errors.selectedCountries = 'Country is a required field, please select at least 1 country.';
    } else if(!state.name){
        errors.name = 'Activity name is required.';
    } else if(isNaN(state.name) !== true){
        errors.name = 'Activity name cannot be a number.';
    } else if(!state.difficulty){
        errors.difficulty = 'Difficulty is a required field, please select one.';
    } else if(!state.duration){
        errors.duration = 'Duration is a required field.';
    } else if(!state.season){
        errors.season = 'Season is a required field, please select one.';
    }
    return errors;
};

export default function CreateActivity() {
    const dispatch = useDispatch();
    const history = useHistory();
    const countries = useSelector((state) => state.countries);
    const [ state, setState ] = useState({
        name: '',
        difficulty: 1,
        duration: '',
        season: 'Any',
        description: '',
        selectedCountries: []
    });
    const [ errors, setErrors ] = useState({});

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
                difficulty: 1,
                duration: '',
                season: 'Any',
                description: '',
                selectedCountries: []
            })
        } else {
            dispatch(postActivity(state));
            setState({
                name: '',
                difficulty: 1,
                duration: '',
                season: 'Any',
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
        <div className = { styles.container }>
            <Link to = '/home'><button className = { styles.button } >Back to Home</button></Link>
            <h1>Create the new activity!!</h1>
            <form className = { styles.my_form } onSubmit = { (e) => handleSubmit(e) }>
                <div className = { styles.form_group }>
                    <label>Countries...*  </label>
                    <select onChange = { (e) => handleSelect(e) } required = 'required'>
                        { 
                            countries.map( (c) => (
                                <option value = { c.name }>{ c.name }</option>
                            ))
                        }
                    </select>
                </div>
                <div className = { styles.form_group }>
                    <label>Activity name*: </label>
                    <input
                        type = 'text'
                        value = { state.name }
                        name = 'name'
                        required = 'required'
                        onChange = { (e) => handleChange(e) }
                        placeholder = 'Surfing in Maui, Hawai'
                    />
                        {errors.name && (
                            <p>{errors.name}</p>
                        )}
                </div>
                <div className = { styles.form_group }>
                    <label>Difficulty*: </label>
                    <select
                        type = 'number'
                        value = { state.difficulty }
                        name = 'difficulty'
                        required = 'required'
                        onChange = { (e) => handleChange(e) }
                    >
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
                <div className = { styles.form_group }>
                    <label>Duration (in hours, text field)*: </label>
                    <input
                        type = 'text'
                        maxLength = { 9 }
                        value = { state.duration }
                        name = 'duration'
                        required = 'required'
                        onChange = { (e) => handleChange(e) }
                        placeholder = 'Xmpl: 2 hours'
                    />
                        {errors.duration && (
                            <p>{errors.duration}</p>
                        )}
                </div>
                <div className = { styles.form_group }>
                    <label>Season*: </label>
                        <select
                            type = 'text'
                            value = { state.season }
                            name = 'season'
                            required = 'required'
                            onChange = { (e) => handleChange(e) }
                        >
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
{/*                <div>
                    <label>Season*: </label>
                    <label><input
                        type = 'radio'
                        checked = { state === 'Any' }
                        value = 'Any'

                        onChange = { (e) => handleRadioClick(e) }
                    />Any </label>
                    <label><input
                        type = 'radio'
                        checked = { state === 'Summer' }
                        value = 'Summer'

                        onChange = { (e) => handleRadioClick(e) }
                    />Summer </label>
                    <label><input
                        type = 'radio'
                        checked = { state === 'Fall' }
                        value = 'Fall'

                        onChange = { (e) => handleRadioClick(e) }
                    />Fall </label>
                    <label><input
                        type = 'radio'
                        checked = { state === 'Winter' }
                        value = 'Winter'

                        onChange = { (e) => handleRadioClick(e) }
                    />Winter </label>
                    <label><input
                        type = 'radio'
                        checked = { state === 'Spring' }
                        value = 'Spring'

                        onChange = { (e) => handleRadioClick(e) }
                    />Spring </label>
                    </div>*/}
                <div className = { styles.form_group }>
                    <label>Brief description*: </label>
                    <input
                        rows = '5'
                        cols = '25'
                        type = 'text'
                        value = { state.description }
                        name = 'description'
                        required = 'required'
                        placeholder = 'A stroll thru Central Park, Manhattan....'
                        onChange = { (e) => handleChange(e) }
                    />
                        {errors.description && (
                            <p>{errors.description}</p>
                        )}
                </div>
                <br/>
                <button className = { styles.button } type = 'submit'>Create Activity</button>
                <br/>
            </form>
                { 
                    state.selectedCountries.map((c) => 
                        <div className = 'ctrs'>
                            <p>{c}</p>
                            <button className = { styles.button } onClick = {() => handleDelete(c)}>x</button>
                        </div>
                    )
                }
                {   errors.selectedCountries && (
                        <p>{errors.selectedCountries}</p>
                )}
        </div>
    )
};