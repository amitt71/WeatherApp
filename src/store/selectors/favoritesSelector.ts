import { createSelector } from 'reselect';
import { CityForecast } from '../../types/forecast';
import { State, stateFavoritesType, stateForecastsType } from '../../types/stateType';

/*
create select function to pick off the pieces of state we care about
for this calculation
*/

const forecastsSelector = (state: State) => state.forecastsReducer;
const favoritesSelector = (state: State) => state.favoritesReducer;


const getFavorites = (forecastsSelector: stateForecastsType, favoritesSelector: stateFavoritesType) => {
    let favors: CityForecast[] = [];
    const forecasts: CityForecast[] = forecastsSelector.forecasts ?? [];
    if (!forecasts.length) return [];

    for (const id of favoritesSelector.favoritesIds) {
        for (const city of forecasts) {
            if (city.cityKey === id.toString()) {
                favors.push(city);
            }
        }
    }
    return favors
}

export default createSelector(
    forecastsSelector, // pick of a piece of state
    favoritesSelector, // pick of a piece of state
    getFavorites // last argument is tge function tat has our select logic
);