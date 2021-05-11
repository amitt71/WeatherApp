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
import { API_KEY_LIMIT, createApiErrorObject, LOCATION_NOT_FOUND } from './../types/apiError';
import { FETCH_REQUEST_CITY_KEY_TO_FORECAST, FETCH_REQUEST_CITY_TO_KEY } from "../types/reduxType";

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
                const apiErrorObject = createApiErrorObject(200, LOCATION_NOT_FOUND, FETCH_REQUEST_CITY_TO_KEY);
                dispatch(fetchRequestCityToKeyFailure(apiErrorObject))
                return;
            }
            const cityKey = firstData[0].Key;
            dispatch(fetchRequestCityToKeySuccess(cityKey, city));
            dispatch(fetchRequestCityKeyToForecasts(cityKey));
            const response2 = await axios.get(forecastURL, forecastConfig(cityKey));
            const { data, status } = response2;
            dispatch(fetchRequestCityKeyToForecastsSuccess(cityKey, city, data))
            return { data, status, key: cityKey };
        }
    } catch (e) {
        const apiErrorObject = createApiErrorObject(200, API_KEY_LIMIT, FETCH_REQUEST_CITY_KEY_TO_FORECAST);
        dispatch(fetchRequestCityKeyToForecastsFailure(apiErrorObject));
    }
}

const sendData  = (data:any) => {
    axios.put('localhost:1367')
}


