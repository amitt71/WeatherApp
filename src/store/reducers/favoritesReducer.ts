import { stateFavoritesType } from '../../types/stateType'
import {
    IfavoritesActionCreator,
    UPDATE_FAVORITES,
    Reducer
} from '../../types/reduxType';

export const initialState: stateFavoritesType = {
    favoritesIds: [],
}
export const reducer: Reducer<stateFavoritesType, IfavoritesActionCreator> = (state = initialState, { type, payload }: IfavoritesActionCreator): stateFavoritesType => {
    switch (type) {
        case UPDATE_FAVORITES:
            const isFavorite = state.favoritesIds.includes((payload.cityKey));
            const newFavoritesIds = !isFavorite ? [...state.favoritesIds, payload.cityKey] :
                state.favoritesIds.filter((favorite: number) => favorite !== payload.cityKey)

            return {
                favoritesIds: newFavoritesIds,
            }
        default:
            return {
                ...state
            }

    }
}


