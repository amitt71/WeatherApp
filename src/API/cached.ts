import axios from 'axios';
import { CityForecast, Iforecasts } from './../types/forecast';
import { setCityForecastConfig } from '../helpers/config';


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
         await axios.post('http://localhost:1337/search/forecasts',{city:city},setCityForecastConfig());
        }

        export const getCity = async (cityKey: string) => {
                 const {data} = await axios.get('http://localhost:1337/search/forecasts',setCityForecastConfig({'cityKey':cityKey}));
                 return data;
                }