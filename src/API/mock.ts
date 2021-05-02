import { Dispatch } from "redux";
import { Barcelona, NewYork, Paris, TelAviv } from "../mockData/forecastsResponse";
import { fetchRequestCityKeyToForecasts, fetchRequestCityKeyToForecastsSuccess, fetchRequestCityToKey, fetchRequestCityToKeySuccess } from "../store/actions/forecastActions";
import { CityForecast } from "../types/forecast";

export const getMockForecastsByCity = (dispatch: Dispatch, city: string) => {
    const mapper: CityForecast[] = [TelAviv, Barcelona, NewYork, Paris];
    let cityForecast: CityForecast;
    switch (city) {
        case 'tel aviv': {
            cityForecast = mapper[0];
            break;
        } case 'barcelona': {
            cityForecast = mapper[1];
            break;
        } case 'new york': {
            cityForecast = mapper[2];
            break;
        } case 'paris': {
            cityForecast = mapper[3];
            break;
        } default: {
            cityForecast = mapper[0];
        }
    }

    dispatch(fetchRequestCityToKey(city));


    const cityKey = parseInt(cityForecast.cityKey);
    dispatch(fetchRequestCityToKeySuccess(cityKey, city));
    dispatch(fetchRequestCityKeyToForecasts(cityKey.toString()));


    dispatch(fetchRequestCityKeyToForecastsSuccess(cityKey.toString(), city, cityForecast.forecasts))
    return { data: cityForecast.forecasts, status: 200, key: cityKey };


}