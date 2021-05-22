import React from 'react';
import { useSelector } from 'react-redux';
import favoritesSelector from '../store/selectors/favoritesSelector';
import FavoritesCities from '../components/FavoriteCity/favoritesCities.component';
import { State } from '../types/stateType';
import classes from './favorites.module.scss';

const FavoritesPage = () => {
    const state = useSelector((state: State) => state);
    const favoirtes = favoritesSelector(state);

    return (
        <React.Fragment>
            <div className={classes.mainPage} >
                <FavoritesCities {...favoirtes} />
            </div>
        </React.Fragment>
    )
}

export default FavoritesPage;