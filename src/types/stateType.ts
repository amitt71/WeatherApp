import { CityForecast } from './forecast';
import { ApiError } from './apiError';

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

interface IcityToKey {
    key: string,
    city: string,
}