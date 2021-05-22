import React from "react";
import { useSelector } from "react-redux";
import WeeklyForecast from "../components/Forecasts/weeklyForecasts.component";
import IsFavorite from '../components/FavoriteUpdate/updateFavorite.component';
import Headline from '../components/ForecastTitle/headlineText.component';
import { CityForecast } from "../types/forecast";
import { State } from "../types/stateType";
import classes from './home.module.scss';
import Spinner from "../components/spinner/spinner.component";
import CityBadage from "../components/CityBadage/cityBadage.component";
import cityBadageClasses from '../components/CityBadage/cityBadage.module.scss';
import { isFavorite} from '../helpers/fuctions';
const HomePage = () => {
    const weeklyForecast: CityForecast = useSelector((state: State) => state.forecastsReducer.currentCity);
    const favoritesIds = useSelector((state: State) => state.favoritesReducer.favoritesIds);
    const isLoading: boolean = useSelector((state: State) => state.forecastsReducer.loading);
    const text = weeklyForecast.forecasts.Headline.Text;
    const cityKey = parseInt(weeklyForecast.cityKey);
    const favorite  = isFavorite(favoritesIds,cityKey); 

    const renderBody = isLoading ? <Spinner loading={true} color={'#f2c2Aa'} /> :
        (
            <React.Fragment>
                <Headline text={text} />
                <WeeklyForecast {...weeklyForecast} />
            </React.Fragment>
        )
        
    return (
        <React.Fragment>
            <div className={classes.mainPage} >
                <div className={classes.headerContainer}>
                    <CityBadage className={cityBadageClasses.cityBadage} city={weeklyForecast.city} />
                    <IsFavorite favorite={favorite} cityKey={cityKey} />
                </div>
                {
                    renderBody
                }
            </div>
        </React.Fragment>

    )
}

export default HomePage;