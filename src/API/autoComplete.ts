import axios from 'axios';
import { locationKeyConfig as autoCompleteConfig } from '../helpers/config';
import { ISuggestAutoComplete } from '../types/autoComplete';
import { autoCompleteURL } from '../types/strings';
import {ICityToKey} from '../types/stateType';
export const autoCompleteAPI = async (str: string) : Promise<ICityToKey[] | undefined> => { 
    try{
    const response = await axios.get(autoCompleteURL,autoCompleteConfig(str));
    
    const {data:autoComplete} : {data:ISuggestAutoComplete[], status:number} = response;
    
    const cities = filterCityAndKey(autoComplete);
    return cities;
}catch(error){
    console.log(error);
}
}

const filterCityAndKey = (suggestions:ISuggestAutoComplete[]) :ICityToKey[] => {
    const citiesWithKeys = [];
    for(const suggestion of suggestions) {
        const potentialCity : ICityToKey = {
            key: suggestion.Key,
            city: suggestion.LocalizedName,
        }
        citiesWithKeys.push(potentialCity)
    }
    return citiesWithKeys;
}