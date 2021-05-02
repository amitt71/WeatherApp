import classes from './dailyForecast.module.scss';
import { IdailyForecasts } from '../../types/forecast';

const DailyForecastComponent = (forecast: IdailyForecasts) => {
    const day = new Date(forecast.Date).toString().split(' ')[0]

    return (
        <div className={classes.dailyForecastContainer} >{
            <div className={classes.dailyForecast}>
                <span>
                    {day}
                </span>
                <span className={classes.temperature} >
                    {

                        Math.floor((forecast.Temperature.Minimum.Value +
                            forecast.Temperature.Maximum.Value
                        ) / 2)

                    }
                </span>
                <img src={require(`../../images/${forecast.Day.Icon}.png`).default} />

            </div>
        }</div>
    )
}

export default DailyForecastComponent;