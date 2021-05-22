import { useHistory } from "react-router-dom";
import { CityForecast } from "../../types/forecast"
import classes from '../Forecasts/dailyForecast.module.scss';
import { useDispatch } from 'react-redux';
import { uptdateCurrentCity } from "../../store/actions/forecastActions";
import { capitalLetter } from "../../helpers/fuctions";

const FavoriteCity = (props: CityForecast) => {
    const temperature = props.forecasts.DailyForecasts[0].Temperature;
    const history = useHistory();
    const dispatch = useDispatch();
    const cityName =  capitalLetter(props.city);
    const onClick = () => {
        dispatch(uptdateCurrentCity(props));
        history.push('/');
    }
    return (
        <div onClick={onClick} className={classes.dailyForecastContainer} >{
            <div className={classes.dailyForecast}>
                <span>
                    {cityName}
                </span>
                <span className={classes.temperature} >
                    {

                        Math.floor((temperature.Minimum.Value +
                            temperature.Maximum.Value
                        ) / 2)

                    }
                </span>
                <img src={require(`../../images/${props.forecasts.DailyForecasts[0].Day.Icon}.png`).default}
                    alt={props.city}
                />

            </div>
        }</div>
    )
}

export default FavoriteCity;