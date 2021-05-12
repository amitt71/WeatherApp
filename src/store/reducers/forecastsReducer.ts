import { stateForecastsType } from '../../types/stateType'
import {
    Reducer,
    IactionCreator,
    FETCH_REQUEST_CITY_TO_KEY,
    FETCH_REQUEST_CITY_TO_KEY_SUCCESS,
    FETCH_REQUEST_CITY_TO_KEY_FAILURE,
    FETCH_REQUEST_CITY_KEY_TO_FORECAST,
    FETCH_REQUEST_CITY_KEY_TO_FORECAST_SUCCESS,
    FETCH_REQUEST_CITY_KEY_TO_FORECAST_FAILURE,
    UPDATE_CURRENT_CITY
} from '../../types/reduxType';
import { CityForecast, defaultCityForecast } from '../../types/forecast';
import { FETCH_CACHED_FORECAST } from './../../types/reduxType';
import { defaultErrorMessage } from '../../types/errorMessageObject';

export const initialState: stateForecastsType = {
    currentCity: defaultCityForecast,
    keyCity: [],
    forecasts: [],
    loading: false,
    errorMessage: defaultErrorMessage,
}
export const reducer: Reducer<stateForecastsType, IactionCreator> = (state = initialState, { type, payload }: IactionCreator) => {
    switch (type) {
        case FETCH_REQUEST_CITY_TO_KEY: {
            const newCurrentCity = { ...state.currentCity };
            newCurrentCity.city = payload.city;
            return {
                ...state,
                currentCity: newCurrentCity,
                loading: true,
            }
        }
        case FETCH_REQUEST_CITY_TO_KEY_SUCCESS: {
            const key = payload.cityKey.toString();
            const city = payload.city;
            const stateCPY = { ...state };
            const newKeyCity = stateCPY.keyCity.length ? [...stateCPY.keyCity, { key, city }] : [{ key, city }];
            return {
                ...state,
                keyCity: newKeyCity,
            }
        }
        case FETCH_REQUEST_CITY_TO_KEY_FAILURE: {
            return {
                ...state,
                currentCity: defaultCityForecast,
                loading: false,
                errorMessage: { ...payload.errorObject },
            }
        }
        case FETCH_REQUEST_CITY_KEY_TO_FORECAST: {
            return {
                ...state,
                loading: true,
            }
        }
        case FETCH_REQUEST_CITY_KEY_TO_FORECAST_SUCCESS: {
            const newForecasts: CityForecast = {
                cityKey: payload.cityKey,
                city: payload.city,
                forecasts: payload.forecasts,
            }
            let cpyCityForecasts;

            const { forecasts: cityForecasts } = state;
            cpyCityForecasts = cityForecasts ? [...cityForecasts] : [defaultCityForecast];
            cpyCityForecasts.push(newForecasts);
            return {
                ...state,
                currentCity: { ...newForecasts },
                forecasts: cpyCityForecasts,
                loading: false,
            }
        }
        case FETCH_REQUEST_CITY_KEY_TO_FORECAST_FAILURE: {
            return {
                ...state,
                currentCity: defaultCityForecast,
                loading: false,
                errorMessage: { ...payload.errorObject }
            }
        }
        case UPDATE_CURRENT_CITY: {
            const newCity = { ...payload.currentCity };
            return {
                ...state,
                currentCity: { ...newCity }
            }
        } case FETCH_CACHED_FORECAST: {
            const currentCity = { ...payload.currentCity };
            return {
                ...state,
                currentCity,
                loading: false,
            }
        }
        default:
            return {
                ...state
            }

    }
}


