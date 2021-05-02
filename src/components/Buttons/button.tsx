import classes from './customButton.module.scss';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
interface IChildComponentProps {
    text: string;
    onClick?: (dispatch: Dispatch, cityKey: number) => void;
    value?: number;
}
const CoustomButton = (props: IChildComponentProps) => {

    const dispatch = useDispatch();
    return (
        <button className={classes.customButton}
            onClick={() => (props.onClick && props.value) ? props.onClick(dispatch, props.value) : {}} >
            <span>
                {props.text}
            </span>
        </button>
    )
}

export default CoustomButton;