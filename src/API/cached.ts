import axios from 'axios';
import { CityForecast, Iforecasts } from './../types/forecast';
import { setCityForecastConfig, setSuggestionsCitiesConfig } from '../helpers/config';
import { autoCompleteCachedURL, autoCompleteURL, forecastCachedURL } from './../types/strings';
import { ICityToKey } from '../types/stateType';


export const Cached = (city: string, forecasts?: CityForecast[]) => {
        if (!(forecasts && forecasts.length)) return null;
        for (const forecast of forecasts) {
            if (forecast.city === city) {
                return forecast;
            }
        }
        return null;
}

export const setCity = async (cityKey: string,cityName:string, forecasts : Iforecasts) => {
    const cityForecast: CityForecast = {
        city:cityName,
        cityKey,
        forecasts
    } 
        const city = JSON.stringify(cityForecast);
         await axios.post(forecastCachedURL,{city:city},setCityForecastConfig());
        }

        export const getCity = async (cityKey: string) => {
                 const {data} = await axios.get(forecastCachedURL,setCityForecastConfig({'cityKey':cityKey}));
                 return data.cityForecast;
        }

        export const setAutoComplete = async (str: string,cities:ICityToKey[]) => {
 
                const suggestions  = JSON.stringify(cities);
                 await axios.post(autoCompleteCachedURL,{suggestions:suggestions,str:str},setSuggestionsCitiesConfig());
                }

                export const getAutoComplete = async (str: string) => {
                    const {data} = await axios.get(autoCompleteCachedURL,setSuggestionsCitiesConfig({'str':str}));
                    return data;
           }