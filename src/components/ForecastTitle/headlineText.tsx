import classes from './headlineText.module.scss';
interface IChildComponentProps {
    text: string
}
const HeadLineText = (props: IChildComponentProps) => {
    return (
        <div className={classes.forecastTitle}>{
            props.text
        }</div>
    )
}

export default HeadLineText;