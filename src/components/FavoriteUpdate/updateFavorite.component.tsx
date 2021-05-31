import { CreateFavoriteAction } from '../../store/actions/favoritesAction';
import classes from './updateFavorite.module.scss';
import heart from '../../images/shallowHeart.svg';
import fullHeart from '../../images/fullHeart.svg';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../types/stateType';

interface Iprops {
    cityKey: number;
    favorite:boolean;
}
const UpadteFavorite = (props: Iprops) => {
    const dispatch = useDispatch();
    const searchDispatched = useSelector((state:State) =>state.forecastsReducer.currentCity.city);
    return (
        searchDispatched.length ? 
        <div className={classes.favoriteContainer}>
            <img onClick={()=> CreateFavoriteAction(dispatch,props.cityKey)} alt='Favorite ' src={props.favorite ? fullHeart : heart} />
        </div>
        : null
    )
}

export default UpadteFavorite;

