import { CityForecast } from './forecast';
import { ApiError } from './apiError';
import { initialState as forecastInitialState } from '../store/reducers/forecastsReducer';
import { initialState as favoritesInitialState } from '../store/reducers/favoritesReducer';

export type stateForecastsType = {
    currentCity: CityForecast,
    keyCity: IcityToKey[],
    forecasts: CityForecast[],
    loading: boolean,
    apiError: ApiError,
}

export type stateFavoritesType = {
    favoritesIds: number[]
}

export type State = {
    forecastsReducer: stateForecastsType;
    favoritesReducer: stateFavoritesType;
}

export const initialState: State = {
    forecastsReducer: forecastInitialState,
    favoritesReducer: favoritesInitialState,
}

interface IcityToKey {
    key: string,
    city: string,
}