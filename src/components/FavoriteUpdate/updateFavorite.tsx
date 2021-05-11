import Button from '../Buttons/button';
import { CreateFavoriteAction } from '../../store/actions/favoritesAction';
import { ADD_TO_FAVORITES } from '../../types/strings';
import classes from './updateFavorite.module.scss';
import heart from '../../images/whiteHeart1.svg';
import fullHeart from '../../images/fullHeart1.svg';

interface Iprops {
    cityKey: number;
    favorite:boolean;
}
const UpadteFavorite = (props: Iprops) => {
    return (
        <div className={classes.favoriteContainer}>
            <img alt='Favorite ' src={props.favorite ? fullHeart : heart} />
            <Button value={props.cityKey} onClick={CreateFavoriteAction} text={ADD_TO_FAVORITES} />
        </div>
    )
}

export default UpadteFavorite;