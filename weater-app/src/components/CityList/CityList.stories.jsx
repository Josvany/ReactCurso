import React from "react";
import CityList from "./CityList";
import { action } from "@storybook/addon-actions"
export default
{
    title: "CityList",
    component: CityList
}

const cities = [
        {city: "Buenos Aires", country: "Argentina"},
        {city: "Bogotá", country: "Colombia"},
        {city: "Madrid", country: "España"},
        {city: "Ciudad De México", country: "México"},
        {city: "Managua", country: "Nicaragua"}   
]

export const CityListExample = () => (<CityList cities={cities} onClickCity={action("Click in city")} />)