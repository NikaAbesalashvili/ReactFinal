import {Route, Switch} from 'react-router-dom';
import LoginPage from './components/authorisation/Authorisation';
import HomePage from './components/home-page/HomePage';
import TopPlacesPage from './components/top-places-page/TopPlacesPage';
import AboutPage from './components/about-page/AboutPage';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path='/log-in' exact component={LoginPage} />
                <Route path='/' exact component={HomePage} />
                <Route path='/top-places' exact component={TopPlacesPage} />
                <Route path='/about' exact component={AboutPage} />
            </Switch>
        </div>
    );
}

export default App;
