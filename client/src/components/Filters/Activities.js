import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryActivities, filterByActivity, getActivities } from '../../redux/actions';

export default function Activities(){
    const dispatch = useDispatch();

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
    }

    return(
        <div>
            <select
                // name = "activities"
                onChange = { (e) => { handleFilterByActivity(e) } }
            >                    {/* console.log(allAct)*/ }
                <option defaultValue value = 'all-activities'>Filter Countries by Activity</option>
                {
                    allAct.map( (i) => { // (console.log(i.name))
                        return (
                            <option key = { i.name } value = { i.name } > { i.name.toLowerCase() } </option>
                        )
                    })
                }
            </select>
        </div>   
    );
}
