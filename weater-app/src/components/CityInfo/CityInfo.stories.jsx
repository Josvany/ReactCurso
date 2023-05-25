import React from 'react'
import CityInfo from './CityInfo'

export default {
    title: "CityInfo",
    component: CityInfo,
   
  };

 export const CityExamples = () => (<CityInfo city={"Buenos aires"} country={"Argentina"}></CityInfo>)