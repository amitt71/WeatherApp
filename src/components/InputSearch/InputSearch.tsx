import { useDispatch, useSelector } from 'react-redux';
import { fetchForecastsAction as FetchForecastsAction } from '../../store/actions/forecastActions';
import { useLocation, useHistory } from 'react-router-dom'
import { State } from '../../types/stateType';
import { capitalLetter } from '../../helpers/fuctions';
import classes from './inputSearch.module.scss';
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
            if (location.pathname !== '/') {
                history.push('/');
            }
            const cityName = capitalLetter(cityValue);
            await FetchForecastsAction(dispatch, cityName, forecasts);

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
