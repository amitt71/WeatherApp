import React from "react";
import { useSelector } from "react-redux";
import WeeklyForecast from "../components/Forecasts/weeklyForecasts";
import UpdateFavorite from '../components/FavoriteUpdate/updateFavorite';
import Headline from '../components/ForecastTitle/headlineText';
import { CityForecast } from "../types/forecast";
import { State } from "../types/stateType";
import classes from './home.module.scss';
import Spinner from "../components/spinner/spinner";
import CityBadage from "../components/CityBadage/cityBadage";

const HomePage = () => {
    const weeklyForecast: CityForecast = useSelector((state: State) => state.forecastsReducer.currentCity);
    const favoritesIds = useSelector((state: State) => state.favoritesReducer.favoritesIds);
    const isLoading: boolean = useSelector((state: State) => state.forecastsReducer.loading);
    const text = weeklyForecast.forecasts.Headline.Text;
    const cityKey = parseInt(weeklyForecast.cityKey);
    const renderBody = isLoading ? <Spinner /> :
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
                    <CityBadage className={classes.cityBadage} city={weeklyForecast.city} />
                    <UpdateFavorite favoritesIds={favoritesIds} cityKey={cityKey} />
                </div>
                {
                    renderBody
                }
            </div>
        </React.Fragment>

    )
}

export default HomePage;