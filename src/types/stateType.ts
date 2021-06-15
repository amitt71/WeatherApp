import { CityForecast } from './forecast';
import { IerrorObject } from './errorMessageObject';
import { initialState as forecastInitialState } from '../store/reducers/forecastsReducer';
import { initialState as favoritesInitialState } from '../store/reducers/favoritesReducer';
import { initialState as citiesSuggestionReducer } from '../store/reducers/citiesSuggestionReducer';


export type stateForecastsType = {
    currentCity: CityForecast,
    keyCity: ICityToKey[],
    forecasts: CityForecast[],
    loading: boolean,
    errorMessage: IerrorObject,
}

export type stateFavoritesType = {
    favoritesIds: number[]
}

export type stateInputSearchType = {
    citiesSuggestion: ICityToKey[],
    selected:number,
}

export type State = {
    forecastsReducer: stateForecastsType;
    favoritesReducer: stateFavoritesType;
    citiesSuggestionReducer: stateInputSearchType;
}

export const initialState: State = {
    forecastsReducer: forecastInitialState,
    favoritesReducer: favoritesInitialState,
    citiesSuggestionReducer: citiesSuggestionReducer,
}

export interface ICityToKey {
    key: string,
    city: string,
}