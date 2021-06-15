
import { Action, AnyAction } from 'redux';
import { CityForecast, Iforecasts } from './forecast';
import { IerrorObject } from './errorMessageObject';
import { ICityToKey} from '../types/stateType';

// SIDE EFFECT API
export const FETCH_REQUEST_CITY_TO_KEY = 'FETCH_REQUEST_CITY_TO_KEY';
export const FETCH_REQUEST_CITY_TO_KEY_SUCCESS = 'FETCH_REQUEST_CITY_TO_KEY_SUCCESS';
export const FETCH_REQUEST_CITY_TO_KEY_FAILURE = 'FETCH_REQUEST_CITY_TO_KEY_FAILURE';
export const FETCH_REQUEST_CITY_KEY_TO_FORECAST = 'FETCH_REQUEST_CITY_KEY_TO_FORECAST';
export const FETCH_REQUEST_CITY_KEY_TO_FORECAST_SUCCESS = 'FETCH_REQUEST_CITY_KEY_TO_FORECAST_SUCCESS';
export const FETCH_REQUEST_CITY_KEY_TO_FORECAST_FAILURE = 'FETCH_REQUEST_CITY_KEY_TO_FORECAST_FAILURE';
export const UPDATE_CURRENT_CITY = 'UPDATE_CURRENT_CITY';
export const UPDATE_FAVORITES = 'UPDATE_FAVORITES';
export const FETCH_CACHED_FORECAST = 'FETCH_CACHED_FORECAST';
export const UPDATE_SUGGESTION_CITIES = 'UPDATE_SUGGESTION_CITIES';
export const UPDATE_SELECTED_SUGGESTION = 'UPDATE_SELECTED_SUGGESTION'; 

export interface IactionCreator {
    type: String,
    payload: Payload,
}

export interface IfavoritesActionCreator {
    type: String,
    payload: {
        cityKey: number,
    },
}

export interface ICitySuggestionCreator {
    type: string,
    payload: CitySuggestionPayload,
}

export type Reducer<S = any, A extends Action = AnyAction> = (
    state: S,
    action: A
) => S

type Payload = {
    loading: boolean,
    city: string,
    cityKey: string,
    forecasts: Iforecasts,
    currentCity: CityForecast,
    errorObject: IerrorObject,
}

type CitySuggestionPayload = {
    citiesSuggestion: ICityToKey[],
    potentialCity: string,
    shouldSuggest:boolean,
    selected:number,
}