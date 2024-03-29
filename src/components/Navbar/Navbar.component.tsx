import Button from "../Buttons/button.component";
import { Link } from 'react-router-dom';
import classes from './navbar.module.scss';
const Navbar = () => {

    return (
        <div className={classes.navbarContainer}>
            <Link className={classes.link} to='/'><Button text={'Home'} /></Link>
            <Link className =  {classes.link} to='/favorites'><Button text={'Favorites'} /></Link>
        </div>
    )
}

export default Navbar;