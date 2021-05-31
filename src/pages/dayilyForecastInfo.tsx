import { useHistory, useParams, } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { State } from '../types/stateType';
import { extractDailyForecastInfo } from '../helpers/fuctions';
import classes from './dailyForecastInfo.module.scss';

interface Iparams  {
    city: string,
    day: string,
}
interface IHistory {
    EpochDate : number,
}
const DailyForecastInfo = () => {
    const history = useHistory<IHistory>();
    const params = useParams<Iparams>();
    const currentCity = useSelector((state:State)=> state.forecastsReducer.currentCity);
    const dailyForecast =extractDailyForecastInfo(currentCity,params.city,history.location.state.EpochDate)
   
    if(!dailyForecast){
        history.push('/')
        return null;
    } 
    return (
        <div className={classes.mainPage}>
            <div className={classes.dailyForecastContainer}>
          {dailyForecast.Date}
          </div>
        </div>
    )
}

export default DailyForecastInfo;