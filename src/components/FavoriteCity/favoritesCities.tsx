import { CityForecast } from "../../types/forecast";
import FavoriteCity from "./favoriteCity";
import classes from './favoritesCities.module.scss';

const FavoritesCities = (props: CityForecast[]) => {
    const arrFavoritesCities = Object.values(props); //retreving all values of Dailyforecasts, while the keys are 0,1,2..n,

    return (
        <div className={classes.favoritesCities}>
            {
                (arrFavoritesCities && arrFavoritesCities.length) ?
                    arrFavoritesCities.map((city) => <FavoriteCity key={city.cityKey} {...city} />)
                    : null
            }
        </div>
    )
}

export default FavoritesCities;