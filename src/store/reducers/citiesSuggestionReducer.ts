import { stateInputSearchType } from '../../types/stateType'
import {
     UPDATE_SUGGESTION_CITIES ,
        Reducer,
        ICitySuggestionCreator
} from '../../types/reduxType';

export const initialState: stateInputSearchType = {
    citiesSuggestion: [],
}
export const reducer: Reducer<stateInputSearchType, ICitySuggestionCreator> = (state = initialState, { type, payload }: ICitySuggestionCreator): stateInputSearchType => {
    switch (type) {
        case UPDATE_SUGGESTION_CITIES:
            return {
                ...state,
                citiesSuggestion: payload.citiesSuggestion,
            }
        default:
            return {
                ...state
            }

    }
}


