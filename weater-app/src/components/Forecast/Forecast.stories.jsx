import React from "react";
import Forecast from "./Forecast";

export default 
{
    title: "Forecast",
    component: Forecast
}

const forecastItemList = [
    { weekDay: "Jueves", hour: 18, state: "sunny", temperature: 17 },
    { weekday: "viernes", hour: 6, state: "cloud", temperature: 18 },
    { weekday: "Viernes", hour: 12, state: "fog", temperature: 18 },
    { weekday: "Viernes", hour: 18, state: "cloudy", temperature: 17 },
    { weekday: "Jueves", hour: 17, state: "rain", temperature: 17 },
    { weekday: "Sábado", hour: 17, state: "rain", temperature: 17 },
]

export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList}></Forecast>)