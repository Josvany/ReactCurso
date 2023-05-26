import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WelcomePages from './pages/WelcomePages';
import MainPage from './pages/MainPage';
import CityPage from './pages/CityPage';
import NotFound from './pages/NotFound';


const App = () => {
  return (
    <div>
      <Router>
        <Switch>
            <Route exact path='/'>
                <WelcomePages />
            </Route>
            <Route path='/main'>
                <MainPage />
            </Route>
            <Route path='/city'>
                <CityPage />
            </Route>
            <Route>
                <NotFound />
            </Route>

        </Switch>
      </Router>
    </div>
  )
}

export default App
