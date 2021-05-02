import { useDispatch, useSelector } from 'react-redux';
import { fetchForecastsAction as FetchForecastsAction } from '../../store/actions/forecastActions';
import { getMockForecastsByCity } from '../../API/mock';
import classes from './inputSearch.module.scss';
import { State } from '../../types/stateType';
import { useState } from 'react';
export const InputSearch = () => {

    const dispatch = useDispatch();
    const forecasts = useSelector((state: State) => {
        return state.forecastsReducer.forecasts;
    })
    const OnKeyDown = async (e: any) => {
        if (e.key === 'Enter') {
            const cityValue = e.target.value;
            await FetchForecastsAction(dispatch, cityValue, forecasts);
        }
    }


    return (
        <div className={classes.inputSearch}>
            <div>
                <input className={classes.inputField} type="text" placeholder="Search for city weather:" onKeyDown={OnKeyDown} />
            </div>
        </div>

    )
}
