import { useHistory } from 'react-router-dom'
import { IdailyForecasts } from '../../types/forecast';
import classes from './dailyForecast.module.scss';
import { useSelector } from 'react-redux';
import { State } from '../../types/stateType';

const DailyForecastComponent = (forecast: IdailyForecasts) => {
    const day = new Date(forecast.Date).toString().split(' ')[0]
    const history = useHistory();
    const city = useSelector((state:State)=> state.forecastsReducer.currentCity.city);
    // const showDailyForecastInfo = () =>{
    //     history.push({
    //         pathname:`/forecastDaily/${city}/${day}`,
    //         state:{
    //                 EpochDate: forecast.EpochDate,
    //         }
    //     })
    // }
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
                <img alt={day} src={require(`../../images/${forecast.Day.Icon}.png`).default} />

            </div>
        }</div>
    )
}

export default DailyForecastComponent;