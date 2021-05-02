import Button from '../Buttons/button';
import { CreateFavoriteAction } from '../../store/actions/favoritesAction';
import { State } from '../../types/stateType';
import { ADD_TO_FAVORITES } from '../../types/strings';
import classes from './updateFavorite.module.scss';
import heart from '../../images/heart.svg';
import fullHeart from '../../images/fullHeart.svg';
import { useSelector } from 'react-redux';

interface Iprops {
    cityKey: number;
    favoritesIds: number[];
}
const UpadteFavorite = (props: Iprops) => {
    const isFavorite = props.favoritesIds.includes(props.cityKey);
    return (
        <div className={classes.favoriteContainer}>
            <img src={isFavorite ? fullHeart : heart} />

            <Button value={props.cityKey} onClick={CreateFavoriteAction} text={ADD_TO_FAVORITES} />
        </div>
    )
}

export default UpadteFavorite;