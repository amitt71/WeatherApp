import { useEffect, useState } from 'react';
import { Action } from 'redux';
import classes from './customButtonBlack.module.scss';


interface IChildComponentProps {
    stylePath: string,
    value: string;
    clickable: boolean,
    onClick?: () => void;
}
const CoustomButton = (props: IChildComponentProps) => {
    const func = () => { const x = 3; };
    const [buttonStyle, setStylePath] = useState<IChildComponentProps>({
        stylePath: `./customButton.module.scss`,
        value: props.value,
        clickable: props.clickable,
        onClick: props.onClick,
    });

    const handleButtonClick = () => {
        const x = (props && props.onClick) ? props.onClick() : 1 == 1;
    }

    useEffect(() => {
        const head = document.head;
        let link: HTMLLinkElement = document.createElement("link");

        link.href = `./${props.stylePath}`;
        link.rel = "stylesheet";
        link.type = "text/css";

        head.appendChild(link);
    }, []);

    return (
        <button className={classes.customButton} type="button" onClick={handleButtonClick}>
            <span>
                {props.value}
            </span>
        </button>

    );
};

export default CoustomButton;
