import Button from "../Buttons/button";
import { Link } from 'react-router-dom';
const Navbar = () => {

    return (
        <div>
            <Link to='/'><Button text={'Home'} /></Link>
            <Link to='/favorites'><Button text={'Favorites'} /></Link>
        </div>
    )
}

export default Navbar;