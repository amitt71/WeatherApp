import {
    UPDATE_SELECTED_SUGGESTION,
    UPDATE_SUGGESTION_CITIES 
} from '../../types/reduxType';
import { ICityToKey } from '../../types/stateType';

export const updateSuggestionCitiesAction = (citiesSuggestion: ICityToKey[]) => {
    return {
        type: UPDATE_SUGGESTION_CITIES,
        payload: {
            citiesSuggestion
        }
    }
}

export const updateSelectedSuggestion = (selected: number) => {
    return {
        type: UPDATE_SELECTED_SUGGESTION,
        payload: {
            selected
        }
    }
}


