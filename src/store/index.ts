import { Store, createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as favoritesReducer } from './reducers/favoritesReducer';
import { reducer as forecastsReducer } from './reducers/forecastsReducer';
import { reducer as citiesSuggestionReducer } from './reducers/citiesSuggestionReducer';

import { State, initialState } from '../types/stateType';

const composeEnhancers = compose;

const rootReducer = combineReducers({ forecastsReducer, favoritesReducer,citiesSuggestionReducer });

export const store = createStore(
    rootReducer as any,
    initialState as State,
    composeWithDevTools(
        composeEnhancers(applyMiddleware(thunk))
    )) as Store<State>;


