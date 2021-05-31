import {
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


