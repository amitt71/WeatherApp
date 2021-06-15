import { State } from '../../types/stateType';
import { useSelector } from 'react-redux';
import classes from './autoComplete.module.scss';

interface IChildComponentProps {
    onChange : Function;
    isActive:boolean;
}

const AutoComplete =  (props: IChildComponentProps) => {
  
    const suggestionsReducerState  = useSelector((state:State) => state.citiesSuggestionReducer);
    const { citiesSuggestion,selected} = suggestionsReducerState;
        const onClick = async (e:any) => {
            const city = e.target.value;

            props.onChange(city);
        } 
    return (
        props.isActive ? 

        <div className={classes.autoCompleteContainer}>
            {
               citiesSuggestion.map((potentialCity,index=0)=> <input className={index === selected ? classes.selected: ''} type={'submit'} onChange={()=>{}} onClick={onClick}  key={potentialCity.key} value={potentialCity.city}/>)
            }
        </div>
        : null
    )
}

export default AutoComplete;

