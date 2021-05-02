import { CityForecast } from "../types/forecast";


export const Cached = (city: string, forecasts?: CityForecast[]) => {
    try {
        if (!(forecasts && forecasts.length)) return null;
        for (const forecast of forecasts) {
            if (forecast.city === city) {
                return forecast;
            }
        }
        return null;
    } catch (e) {
        const error = e;
        console.log(error)
    }
}