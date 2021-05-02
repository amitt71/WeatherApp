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
        params: {
            q: city,
            apikey: process.env.REACT_APP_API_KEY,
        }
    }
    return config;
}



