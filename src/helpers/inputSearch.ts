import { capitalLetter, isEmptyString } from './fuctions';
import {fetchForecastsAction} from '../store/actions/forecastActions';
import {fetchRequestCityToKeyFailure as fetchEmptyInputErrorMessage} from '../store/actions/forecastActions';
import { Dispatch } from 'redux';
import { CityForecast } from '../types/forecast';
import { createErrorObject, EMPTY_INPUT, INVALID_INPUT } from '../types/errorMessageObject';
import { updateSuggestionCitiesAction,updateSelectedSuggestion } from '../store/actions/suggestionActions';
import { autoCompleteAPI } from '../API/autoComplete';
import { ICityToKey } from '../types/stateType';
import { getForecastByCityKey } from '../API/Accuweather';

export const onKeyDownFunctionHandler = async (e : any,setInputValue:Function, setIsActive:Function,history:any,location:any, dispatch:Dispatch,forecasts:CityForecast[],selected:number,suggestSelected:ICityToKey) => {
    if (e.key === 'Enter') {
        let cityValue;
        selected > -1 ? cityValue = suggestSelected.city: cityValue = e.target.value;
        setInputValue(cityValue);
        const isNotEmpty = isEmptyString(cityValue)
        setIsActive(false);
        if(isNotEmpty){
        if (location.pathname !== '/') {
            history.push('/');
        }
        const cityName = capitalLetter(cityValue);
        selected > -1 ? await getForecastByCityKey(dispatch,suggestSelected.city,suggestSelected.key): 
                    await fetchForecastsAction(dispatch, cityName, forecasts);

    }else{
        const emptyInputErrorObject = createErrorObject(0,EMPTY_INPUT,INVALID_INPUT);
        dispatch(fetchEmptyInputErrorMessage(emptyInputErrorObject));
    }
}
if(e.key === 'ArrowDown'){
    const updateSelected = selected + 1;
    dispatch(updateSelectedSuggestion(updateSelected));
}
if(e.key === 'ArrowUp'){
    const updateSelected = selected - 1;
    dispatch(updateSelectedSuggestion(updateSelected));
}
if(e.key === 'Escape'){
    setIsActive(false);
}

}


export const onChangeHandler = async (e: any,setInputValue:Function,setIsActive:Function,dispatch:Dispatch) : Promise<void> => {
    const str = e.target.value;
    setInputValue(str);
    if(str && str.trim()){
        
        //const { autoComplete } = await getAutoComplete(str);
        const citiesSuggestion = /*(autoComplete && autoComplete.length)? autoComplete :*/ await autoCompleteAPI(str);
    if(citiesSuggestion){
        dispatch(updateSuggestionCitiesAction(citiesSuggestion));
        setIsActive(true);
       
        /*
        if(!(autoComplete && autoComplete.length)) await setAutoComplete(str,citiesSuggestion);
        */
    }
    }else{
        setIsActive(false);
    }
}