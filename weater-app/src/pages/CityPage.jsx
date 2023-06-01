import React from "react";
// import { Link } from 'react-router-dom'
import { Grid } from "@mui/material";
import CityInfo from "../components/CityInfo/CityInfo";
import Weather from "../components/Weather/Weather";
import WeatherDetails from "./../components/WeatherDetails/WeatherDetails";
import ForecastChart from "./../components/ForecastChart/ForecastChart";
import Forecast from "./../components/Forecast/Forecast";

const dataExample = [
  {
    dayHour: "Jue 18",
    min: 14,
    max: 22,
  },
  {
    dayHour: "Vie 06",
    min: 18,
    max: 27,
  },
  {
    dayHour: "Vie 12",
    min: 18,
    max: 28,
  },
  {
    dayHour: "Vie 18",
    min: 18,
    max: 25,
  },
  {
    dayHour: "Sab 06",
    min: 15,
    max: 22,
  },
  {
    dayHour: "Sab 12",
    min: 12,
    max: 19,
  },
];

const CityPage = (props) => {
  const forecastItemListExample = [
    { hour: 18, state: "sunny", temperature: 17, weekDay: "Martes" },
    { hour: 6, state: "cloud", temperature: 18, weekday: "Miercoles" },
    { hour: 12, state: "fog", temperature: 18, weekday: "Viernes" },
    { hour: 18, state: "cloudy", temperature: 17, weekday: "Viernes" },
    { hour: 15, state: "rain", temperature: 17, weekday: "Jueves" },
    { hour: 17, state: "rain", temperature: 17, weekday: "Sábado" },
  ];

  const city = "Buenos Aires";
  const country = "Argentina";
  const state = "cloudy";
  const temperature = 20;
  const humidity = 80;
  const wind = 5;
  const data = dataExample;
  const forecastItemList = forecastItemListExample;

  return (
    <Grid container justifyContent="space-around" direction={"column"} spacing={2}>
      <Grid
        item
        container
        xs={12}
        justifyContent={"center"}
        alignItems={"flex-end"}
      >
        <CityInfo country={country} city={city} />
      </Grid>

      <Grid item container xs={12} justifyContent={"center"}>
        <Weather state={state} temperature={temperature} />

        <WeatherDetails humidity={humidity} wind={wind} />
      </Grid>



      <Grid item>
        <ForecastChart data={data} />
      </Grid>
      <Grid item>
        <Forecast forecastItemList={forecastItemList} />
      </Grid>
    </Grid>
  );
};

export default CityPage;
