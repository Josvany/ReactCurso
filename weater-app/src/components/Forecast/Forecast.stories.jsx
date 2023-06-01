import React from "react";
import Forecast from "./Forecast";

export default {
  title: "Forecast",
  component: Forecast,
};

const forecastItemList = [
  { hour: 18, state: "sunny", temperature: 17, weekDay: "Jueves" },
  { hour: 6, state: "cloud", temperature: 18, weekday: "viernes" },
  { hour: 12, state: "fog", temperature: 18, weekday: "Viernes" },
  { hour: 18, state: "cloudy", temperature: 17, weekday: "Viernes" },
  { hour: 17, state: "rain", temperature: 17, weekday: "Jueves" },
  { hour: 17, state: "rain", temperature: 17, weekday: "Sábado" },
];

export const ForecastExample = () => (
  <Forecast forecastItemList={forecastItemList}></Forecast>
);
