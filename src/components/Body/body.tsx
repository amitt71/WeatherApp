import React from 'react';
import classes from './body.module.scss';
interface IChildComponentProps {
    render: () => React.ReactElement;
}

const body = (props : IChildComponentProps) => {

        return (
            <div className={classes.body}>
                <props.render/>
            </div>
        )
}

export default body;