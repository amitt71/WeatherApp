import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchForecastsAction } from '../../store/actions/forecastActions';
import { useLocation, useHistory } from 'react-router-dom'
import AutoComplete from '../autoComplete/autoComplete';
import { State } from '../../types/stateType';
import classes from './inputSearch.module.scss';
import { onKeyDownFunctionHandler,onChangeHandler } from './../../helpers/inputSearch';

export const InputSearch = () => {
    const [inputValue,setInputValue] = useState('');
    const [isActive,setIsActive] = useState(false);
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const forecasts = useSelector((state: State) => state.forecastsReducer.forecasts );
    const suggestionsReducer = useSelector((state:State) => state.citiesSuggestionReducer);
    const selected = suggestionsReducer.selected;
    const selectedCity = suggestionsReducer.citiesSuggestion[selected];
    const OnKeyDown = async (e: any) => {
        await onKeyDownFunctionHandler(e,setInputValue,setIsActive,history,location,dispatch,forecasts,suggestionsReducer.selected,selectedCity);
    }

    const onChange = async (e:any) => {
        await onChangeHandler(e,setInputValue,setIsActive,dispatch);
    }

    const handleCityClicked = async (city: string) => {
            setIsActive(false);
            setInputValue(city);
            await fetchForecastsAction(dispatch,city,forecasts);
            history.push('/');
    }

    return (
        <div className={classes.container}>
        <div className={classes.inputSearch}>  
                <input value={inputValue} className={classes.inputField} type="text" placeholder="Search for city weather:" onChange={onChange} onKeyDown={OnKeyDown} />                
                <AutoComplete isActive={isActive} onChange = {handleCityClicked} />
        </div>
        </div>

    )
}
