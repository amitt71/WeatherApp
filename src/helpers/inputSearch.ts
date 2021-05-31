import { capitalLetter, isEmptyString } from './fuctions';
import {fetchForecastsAction} from '../store/actions/forecastActions';
import {fetchRequestCityToKeyFailure as fetchEmptyInputErrorMessage} from '../store/actions/forecastActions';
import { Dispatch } from 'redux';
import { CityForecast } from '../types/forecast';
import { createErrorObject, EMPTY_INPUT, INVALID_INPUT } from '../types/errorMessageObject';
import { updateSuggestionCitiesAction } from '../store/actions/suggestionActions';
import { autoCompleteAPI } from '../API/autoComplete';

export const onKeyDownFunctionHandler = async (e : any, setIsActive:Function,history:any,location:any, dispatch:Dispatch,forecasts:CityForecast[]) => {
    if (e.key === 'Enter') {
        const cityValue = e.target.value;
        const isNotEmpty = isEmptyString(cityValue)
        setIsActive(false);
        if(isNotEmpty){
        if (location.pathname !== '/') {
            history.push('/');
        }
        const cityName = capitalLetter(cityValue);
        await fetchForecastsAction(dispatch, cityName, forecasts);

    }else{
        const emptyInputErrorObject = createErrorObject(0,EMPTY_INPUT,INVALID_INPUT);
        dispatch(fetchEmptyInputErrorMessage(emptyInputErrorObject));
    }
}
if(e.key === 'Escape'){
    setIsActive(false);
}

}


export const onChangeHandler = async (e: any,setInputValue:Function,setIsActive:Function,dispatch:Dispatch) : Promise<void> => {
    const str = e.target.value;
    setInputValue(str);
    if(str && str.trim()){
        const citiesSuggestion = await autoCompleteAPI(str);
        if(citiesSuggestion){
        dispatch(updateSuggestionCitiesAction(citiesSuggestion));
        setIsActive(true);
        }
    }else{
        setIsActive(false);
    }
}