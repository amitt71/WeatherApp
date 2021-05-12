import { useDispatch, useSelector } from 'react-redux';
import { fetchForecastsAction as FetchForecastsAction, fetchRequestCityToKeyFailure as fetchEmptyInputErrorMessage } from '../../store/actions/forecastActions';
import { useLocation, useHistory } from 'react-router-dom'
import { State } from '../../types/stateType';
import { capitalLetter, isEmptyString } from '../../helpers/fuctions';
import classes from './inputSearch.module.scss';
import { createErrorObject, EMPTY_INPUT, INVALID_INPUT } from '../../types/errorMessageObject';
export const InputSearch = () => {
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const forecasts = useSelector((state: State) => {
        return state.forecastsReducer.forecasts;
    })
    const OnKeyDown = async (e: any) => {
        if (e.key === 'Enter') {
            const cityValue = e.target.value;
            const isNotEmpty = isEmptyString(cityValue)
            if(isNotEmpty){
            if (location.pathname !== '/') {
                history.push('/');
            }
            const cityName = capitalLetter(cityValue);
            await FetchForecastsAction(dispatch, cityName, forecasts);

        }else{
            const emptyInputErrorObject = createErrorObject(0,EMPTY_INPUT,INVALID_INPUT);
            dispatch(fetchEmptyInputErrorMessage(emptyInputErrorObject));
        }
    }
    
}


    return (
        <div className={classes.inputSearch}>
            <div>
                <input className={classes.inputField} type="text" placeholder="Search for city weather:" onKeyDown={OnKeyDown} />
            </div>
        </div>

    )
}
