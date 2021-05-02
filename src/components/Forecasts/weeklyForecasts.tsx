
import { CityForecast } from '../../types/forecast';
import DailyForecastComponent from './DailyForecast';
import classes from './weeklyForecasts.module.scss'

const WeeklyForecast = (props: CityForecast) => {
    if (!(props.cityKey)) return null;
    const { forecasts } = props;
    const { DailyForecasts } = forecasts;
    const arrForecasts = Object.values(DailyForecasts); //retreving all values of Dailyforecasts, while the keys are 0,1,2..n,
    let key = parseInt(props.cityKey);
    return (
        <div className={classes.container}>
            { arrForecasts.map((forecast, index = key) => {
                return <DailyForecastComponent key={index}  {...forecast} />
            })
            }
        </div>
    )
}

export default WeeklyForecast;