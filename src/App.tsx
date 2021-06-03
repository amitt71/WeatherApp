import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { InputSearch } from './components/InputSearch/InputSearch.component';
import Header from './components/Header/Header.component';
import Navbar from './components/Navbar/Navbar.component';
import HomePage from './pages/Home.page';
import Body from './components/Body/body';
import FavoritesPage from './pages/Favorites.page';
import classes from './App.module.scss';
import Toastify from './components/Toastify/toastify.component'
import { TITLE } from './types/strings';
import DailyForecastInfo from './pages/dayilyForecastInfo';



function App() {

  return (
    <div className={classes.rootContainer}>
      <Toastify />
      <BrowserRouter>
        <Header title={TITLE} render={() => <Navbar />} />
        <InputSearch />
        <Switch>
          <Route exact path='/' >
            <Body render = {() => <HomePage/>} />
          </Route>
          <Route path='/favorites'>
            <Body render = {() => <FavoritesPage/> }/>
          </Route>
          <Route path='/forecastDaily/:city/:day'>
          <DailyForecastInfo/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
