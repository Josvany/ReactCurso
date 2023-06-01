import React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@mui/material'
import CityInfo from '../components/CityInfo/CityInfo'
import Weather from '../components/Weather/Weather'
import WeatherDetails from './../components/WeatherDetails/WeatherDetails';
import ForecastChart from './../components/ForecastChart/ForecastChart';
import Forecast from './../components/Forecast/Forecast';


const dataExample = [
  {
      "dayHour": "Jue 18",
      "min": 14,
      "max": 22,
  },
  {
      "dayHour": "Vie 06",
      "min": 18,
      "max": 27,
  },
  {
      "dayHour": "Vie 12",
      "min": 18,
      "max": 28,
  },
  {
      "dayHour": "Vie 18",
      "min": 18,
      "max": 25,
  },
  {
      "dayHour": "Sab 06",
      "min": 15,
      "max": 22,
  },
  {
      "dayHour": "Sab 12",
      "min": 12,
      "max": 19,
  }
]

const forecastItemListExample = [
  { weekDay: "Jueves", hour: 18, state: "sunny", temperature: 17 },
  { weekday: "viernes", hour: 6, state: "cloud", temperature: 18 },
  { weekday: "Viernes", hour: 12, state: "fog", temperature: 18 },
  { weekday: "Viernes", hour: 18, state: "cloudy", temperature: 17 },
  { weekday: "Jueves", hour: 17, state: "rain", temperature: 17 },
  { weekday: "Sábado", hour: 17, state: "rain", temperature: 17 },
]

const CityPage = props => {

  const city = "Buenos Aires";
  const country = "Argentina";
  const state = "cloudy";
  const temperature = 20;
  const humidity = 80;
  const wind = 5;
  const data = dataExample;
  const forecastItemList = forecastItemListExample;

  return (
    <Grid container justify='center' direction={'column'}>
      <Grid item xs={12}>
        <CityInfo country={country} city={city}/>
      </Grid>
      <Grid item xs={12}>
        <Grid item>
          <Weather state={state} temperature={temperature} />
        </Grid>
        <Grid item>
          <WeatherDetails humidity={humidity} wind={wind} />
        </Grid>
        <Grid item>
          <ForecastChart data={data} />
        </Grid>
        <Grid item>
          <Forecast forecastItemList={forecastItemList} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CityPage
