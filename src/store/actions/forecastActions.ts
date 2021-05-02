import { Dispatch } from 'redux';
import {
    FETCH_REQUEST_CITY_TO_KEY_FAILURE,
    FETCH_REQUEST_CITY_TO_KEY,
    FETCH_REQUEST_CITY_TO_KEY_SUCCESS,
    FETCH_REQUEST_CITY_KEY_TO_FORECAST,
    FETCH_REQUEST_CITY_KEY_TO_FORECAST_SUCCESS,
    FETCH_REQUEST_CITY_KEY_TO_FORECAST_FAILURE,
    UPDATE_CURRENT_CITY,
    FETCH_CACHED_FORECAST
} from '../../types/reduxType';
import { GetForecastByCity } from '../../API/Accuweather';
import { CityForecast } from '../../types/forecast';
import { Iforecasts } from '../../types/forecast';
import { ApiError } from '../../types/apiError';


// Action Creator --> for submiting city  in the input
export const fetchRequestCityToKey = (city: String) => {
    return {
        type: FETCH_REQUEST_CITY_TO_KEY,
        payload: {
            city
        }
    }
}

// Action Creator --> fetch request for Location key by city name has failed 
export const fetchRequestCityToKeyFailure = (error: ApiError) => {
    return {
        type: FETCH_REQUEST_CITY_TO_KEY_FAILURE,
        payload: {
            apiError: {
                status: error.status,
                message: error.message,
                api: error.api
            }
        }
    }
}


// Action Creator --> fetch request for Location key by city name has succeed 
export const fetchRequestCityToKeySuccess = (cityKey: Number, city: String) => {
    return {
        type: FETCH_REQUEST_CITY_TO_KEY_SUCCESS,
        payload: {
            cityKey,
            city
        }
    }
}

// Action Creator --> fetch request with cityKey (LocationKey) to retrive Forecasts.
export const fetchRequestCityKeyToForecasts = (cityKey: string) => {
    return {
        type: FETCH_REQUEST_CITY_KEY_TO_FORECAST,
        payload: {
            cityKey
        }
    }
}

// Action Creator --> fetch request with cityKey (LocationKey) to retrive Forecasts succeed.
export const fetchRequestCityKeyToForecastsSuccess = (cityKey: string, city: string, forecasts: Iforecasts) => {
    const cityForecast: CityForecast = {
        cityKey,
        city,
        forecasts,
    }
    return {
        type: FETCH_REQUEST_CITY_KEY_TO_FORECAST_SUCCESS,
        payload: cityForecast
    }
}

export const fetchRequestCityKeyToForecastsFailure = (error: ApiError) => {
    return {
        type: FETCH_REQUEST_CITY_KEY_TO_FORECAST_FAILURE,
        payload: {
            apiError: {

                status: error.status,
                message: error.message,
                api: error.api
            }
        }
    }
}

export const uptdateCurrentCity = (currentCity: CityForecast) => {
    return {
        type: UPDATE_CURRENT_CITY,
        payload: {
            currentCity: {
                city: currentCity.city,
                cityKey: currentCity.cityKey,
                forecasts: currentCity.forecasts,
            }
        }
    }
}

export const fetchCachedForecast = (currentCity: CityForecast) => {
    return {
        type: FETCH_CACHED_FORECAST,
        payload: {
            currentCity: {
                cityKey: currentCity.cityKey,
                city: currentCity.city,
                forecasts: currentCity.forecasts,
            }
        }
    }
}

export const fetchForecastsAction = async (dispatch: Dispatch, city: string, forecasts: CityForecast[]) => {
    await GetForecastByCity(dispatch, city, forecasts);
}



