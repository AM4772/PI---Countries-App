import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryActivities, filterByActivity, getActivities } from '../../redux/actions';
import styles from './activities.module.css';

export default function Activities(){
    const dispatch = useDispatch();
    const [ choice, setChoice ] = useState();

    const allAct = useSelector( (state) => state.activities);

    useEffect(() => { 
        dispatch(getActivities());
        dispatch(getCountryActivities());
    }, [dispatch]);

    let handleFilterByActivity = (e) => {
        e.preventDefault();
        if(e.target.value !== 'all-activities') {
            dispatch(filterByActivity(e.target.value));

        } else {
            dispatch(getCountryActivities());
        }
        setChoice(e.target.value);
    }

    return(
        <div>
            <select
                value = { choice }
                defaultValue = { 'default' }
                className = { styles.activities }
                onChange = { (e) => { handleFilterByActivity(e) } }
            >                    {/* console.log(allAct)*/ }
                <option value = { choice } disabled>Filter Countries by Activity</option>
                <option value = 'all-activities'>All</option>
                {
                    allAct.map( (i) => { // (console.log(i.name))
                        return (
                            <option key = { i.name } value = { i.name } > { i.name.toLowerCase() } </option>
                        )
                    })
                }
            </select>
            <h4 className = { styles.activities_h4 }> { choice } </h4>
        </div>   
    );
}
