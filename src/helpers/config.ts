import { AxiosRequestConfig } from "axios"

export const forecastConfig = (cityKey: String) => {
    const config: AxiosRequestConfig = {
        params: {
            apikey: process.env.REACT_APP_API_KEY,
            metric: true,
            locationKey: cityKey
        }

    }
    return config;

}


export const locationKeyConfig = (city: String) => {
    const config: AxiosRequestConfig = {
        headers:{
            'Access-Control-Allow-Origin':'*'
        },
        params: {
            q: city,
            apikey: process.env.REACT_APP_API_KEY,
        }
    }
    return config;
}


export const weatherAppConfig = (city: String) => {
    const config: AxiosRequestConfig = {
        params: {
            q: city,
            appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
        }
    }
    return config;
}

export const setCityForecastConfig = (params={}) => {
    const config: AxiosRequestConfig = {
           baseURL:'http://localhost:1337/search/forecasts',
           headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
        },
        params: {...params}
    }
    return config;
}


export const setSuggestionsCitiesConfig = (params={}) => {
    const config: AxiosRequestConfig = {
           baseURL:'http://localhost:1337/search/autoComplete',
           headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
        },
        params: {...params}
    }
    return config;
}




