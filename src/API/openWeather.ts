import axios from 'axios';
import { weatherAppConfig } from '../helpers/config';
import { IOpenWeatherForecasts } from '../types/openWeather';
import { openWeatherURL } from './../types/strings';

export const getForecastByCity = async (city:string) :Promise<IOpenWeatherForecasts>  => {

    const response = await axios.get(openWeatherURL,weatherAppConfig(city));
    const{ data:forecasts, status} : {data:IOpenWeatherForecasts,status:number} = response;
    return forecasts;

}