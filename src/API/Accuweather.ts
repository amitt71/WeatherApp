import axios from "axios"
import { locationURL, forecastURL } from '../types/strings';
import { locationKeyConfig, forecastConfig } from '../helpers/config'
import { Dispatch } from "redux";
import {
    fetchRequestCityKeyToForecasts,
    fetchRequestCityToKeyFailure,
    fetchRequestCityToKeySuccess,
    fetchRequestCityKeyToForecastsFailure,
    fetchRequestCityToKey,
    fetchRequestCityKeyToForecastsSuccess,
    fetchCachedForecast
} from "../store/actions/forecastActions";
import { CityForecast } from "../types/forecast";
import { Cached } from './cached';
import { API_KEY_LIMIT, createErrorObject, LOCATION_NOT_FOUND } from '../types/errorMessageObject';
import { FETCH_REQUEST_CITY_KEY_TO_FORECAST, FETCH_REQUEST_CITY_TO_KEY } from "../types/reduxType";
import { Iforecasts } from './../types/forecast';

export const getForecastByCityKey = async (dispatch: Dispatch, city: string, cityKey:string) => {

    dispatch(fetchRequestCityToKeySuccess(Number(cityKey), city));
    dispatch(fetchRequestCityKeyToForecasts(cityKey));

    const forecasts = await axios.get(forecastURL, forecastConfig(cityKey));
    const { data  } : {data:Iforecasts,status:number} = forecasts;
    dispatch(fetchRequestCityKeyToForecastsSuccess(cityKey, city, data))
    return;
}


export const GetForecastByCity = async (dispatch: Dispatch, city: string, forecasts?: CityForecast[]): Promise<any> => {
    try {
        dispatch(fetchRequestCityToKey(city));
        const cachedForeCast = Cached(city, forecasts)
        if (cachedForeCast) {
            dispatch(fetchCachedForecast(cachedForeCast));
        } else {
            const respone = await axios.get(locationURL, locationKeyConfig(city));
            const { data: firstData, status: firstStatus } = respone;
            if (firstStatus === 200 && !firstData.length) {
                const apiErrorObject = createErrorObject(200, LOCATION_NOT_FOUND, FETCH_REQUEST_CITY_TO_KEY);
                dispatch(fetchRequestCityToKeyFailure(apiErrorObject))
                return;
            }
            const cityKey = firstData[0].Key;
            dispatch(fetchRequestCityToKeySuccess(cityKey, city));

            await getForecastByCityKey(dispatch,city,cityKey);
        }
    } catch (e) {
        const apiErrorObject = createErrorObject(200, API_KEY_LIMIT, FETCH_REQUEST_CITY_KEY_TO_FORECAST);
        dispatch(fetchRequestCityKeyToForecastsFailure(apiErrorObject));
    }
}