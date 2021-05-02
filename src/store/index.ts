import { Store, createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { initialState } from './reducers/forecastsReducer';
import { reducer as favoritesReducer } from './reducers/favoritesReducer';
import { reducer as forecastsReducer } from './reducers/forecastsReducer';
import { stateForecastsType } from '../types/stateType';

const composeEnhancers = compose;

const rootReducer = combineReducers({ forecastsReducer, favoritesReducer });

export const store = createStore(
    rootReducer as any,
    initialState as any,
    composeWithDevTools(
        composeEnhancers(applyMiddleware(thunk))
    )) as Store<stateForecastsType>;


