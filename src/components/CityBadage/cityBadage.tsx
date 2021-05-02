interface IChildComponentProps {
    city: string;
    className: string;
}
const CityBadage = (props: IChildComponentProps) => {
    const city = props.city.charAt(0).toUpperCase() + props.city.slice(1);
    return (
        <div className={props.className}>{city}</div>
    )
}

export default CityBadage;