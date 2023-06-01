import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WelcomePages from './pages/WelcomePages';
import MainPage from './pages/MainPage';
import CityPage from './pages/CityPage';
import NotFound from './pages/NotFound';
import { Grid } from '@mui/material';


const App = () => {
  return (
    <Grid container justifyContent='center' direction={'row'}>
      <Grid item xs={12} sm={10} md={10} lg={8}>
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
      </Grid>
    </Grid>
  )
}

export default App
