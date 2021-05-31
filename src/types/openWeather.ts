import React from 'react';


export interface IOpenWeatherForecasts {
    coord : ICoLordinate,
    weather: IWeather,
    base:string,
    main : IForecastDetails,
    visibility:number,
    wind:IWind,
    clouds : IClouds,
    dt:number,
    sys: ISys,
    timezone:number,
    id:number,
    name:string,
    cod:number

}
export interface ICoLordinate {
        lon: number,
        lat: number
}

export interface IWeather {
    weather : IDetalis[],
}

export interface IDetalis {
    id: number,
    main:string,
    description:string,
    icon:string,
}

export interface IForecastDetails {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number,
}

export interface IWind {
        speed : number,
        deg: number,
        gust: number,
}

interface IClouds {
    all:number,
}

interface ISys {
        type:number,
        id: number,
        country:string,
        sunrise:number,
        sunset:number,  
}