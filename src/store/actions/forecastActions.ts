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
import { IerrorObject } from '../../types/errorMessageObject';


export const fetchRequestCityToKey = (city: String) => {
    return {
        type: FETCH_REQUEST_CITY_TO_KEY,
        payload: {
            city
        }
    }
}

export const fetchRequestCityToKeyFailure = (error: IerrorObject) => {
    return {
        type: FETCH_REQUEST_CITY_TO_KEY_FAILURE,
        payload: {
            errorObject: {
                ...error
            }
        }
    }
}


export const fetchRequestCityToKeySuccess = (cityKey: Number, city: String) => {
    return {
        type: FETCH_REQUEST_CITY_TO_KEY_SUCCESS,
        payload: {
            cityKey,
            city
        }
    }
}

export const fetchRequestCityKeyToForecasts = (cityKey: string) => {
    return {
        type: FETCH_REQUEST_CITY_KEY_TO_FORECAST,
        payload: {
            cityKey
        }
    }
}

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

export const fetchRequestCityKeyToForecastsFailure = (error: IerrorObject) => {
    return {
        type: FETCH_REQUEST_CITY_KEY_TO_FORECAST_FAILURE,
        payload: {
            errorObject: { 
                ...error
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



