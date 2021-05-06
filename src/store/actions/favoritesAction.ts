import { UPDATE_FAVORITES } from '../../types/reduxType';
import { Dispatch } from 'redux';


// Favorite Action  -->  change city favorite status
const favoriteAction = (cityKey: number) => {
    return {
        type: UPDATE_FAVORITES,
        payload: {
            cityKey,
        }
    }
}

export const CreateFavoriteAction = (dispatch: Dispatch, cityKey: number) => {
    dispatch(favoriteAction(cityKey));
}

