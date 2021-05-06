import Button from "../Buttons/button";
import { Link } from 'react-router-dom';
import classes from './navbar.module.scss';
const Navbar = () => {

    return (
        <div className={classes.navbarContainer}>
            <Link to='/'><Button text={'Home'} /></Link>
            <Link to='/favorites'><Button text={'Favorites'} /></Link>
        </div>
    )
}

export default Navbar;