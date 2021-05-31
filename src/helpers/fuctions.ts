
import { CityForecast } from './../types/forecast';
export  const isFavorite = (favoritesIds: number[], id:number)  : boolean =>  {
    return favoritesIds.includes(id);
}

export const capitalLetter = (word:string) => { 
    word = word.toLowerCase();
     const wordcapitalLetter  = word.charAt(0).toUpperCase() + word.slice(1);
     return wordcapitalLetter;
}

export const isEmptyString = ( strInput: string) : boolean =>  {
    if( !strInput){
        return false;
    }
    return true;
}

export const extractDailyForecastInfo = (cityForcast : CityForecast, city:string, epochDate:number) => {
            return cityForcast.forecasts.DailyForecasts.find(daily => daily.EpochDate === epochDate);    
}