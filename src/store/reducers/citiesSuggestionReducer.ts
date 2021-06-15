import { stateInputSearchType } from '../../types/stateType'
import {
     UPDATE_SUGGESTION_CITIES ,
        Reducer,
        ICitySuggestionCreator,
        UPDATE_SELECTED_SUGGESTION
} from '../../types/reduxType';

export const initialState: stateInputSearchType = {
    citiesSuggestion: [],
    selected:-1,
}
export const reducer: Reducer<stateInputSearchType, ICitySuggestionCreator> = (state = initialState, { type, payload }: ICitySuggestionCreator): stateInputSearchType => {
    switch (type) {
        case UPDATE_SUGGESTION_CITIES:
            return {
                ...state,
                citiesSuggestion: payload.citiesSuggestion,
            }
            case UPDATE_SELECTED_SUGGESTION:
                const size  = state.citiesSuggestion.length;
                const selected = payload.selected > -1 ? payload.selected % size : 
                                    size -1;
                return {
                    ...state,
                    selected: selected,
                }
        default:
            return {
                ...state
            }

    }
}


