import classes from './header.module.scss';
interface IChildComponentProps {
    render: () => React.ReactElement;
    title: string;
}
const Header = (props: IChildComponentProps) => {
    return (
        <div className={classes.header}>
            <span className={classes.title}> {props.title}</span>
            <props.render />
        </div>
    )
}

export default Header;

