import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { InputSearch } from './components/InputSearch/InputSearch';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/navbar';
import HomePage from './pages/Home';
import FavoritesPage from './pages/Favorites';
import classes from './App.module.scss';
import Toastify from './components/Toastify/toastify'
import { TITLE } from './types/strings';



function App() {

  const NavBar = () => <Navbar />;
  return (
    <div className={classes.rootContainer}>
      <Router>
        <Toastify />
        <Header title={TITLE} render={NavBar} />
        <InputSearch />
        <Switch>
          <Route exact path='/' >
            <HomePage />
          </Route>
          <Route path='/favorites'>
            <FavoritesPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
