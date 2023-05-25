import React from 'react'
import PropTypes from 'prop-types'
import { WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain } from 'react-icons/wi'

export const validNamesOfIcons = ["cloud", "cloudy", "fog", "sunny", "rain"]

const stateByName = 
{
  cloud: WiCloud,
  cloudy: WiDayCloudy,
  fog: WiDayFog,
  sunny: WiDaySunny,
  rain: WiRain
}


const IconState = ({ state }) => {
    const StateByName = stateByName[state];
  return (
      <StateByName />  
  )
}

IconState.propTypes = {
    state: PropTypes.oneOf(validNamesOfIcons).isRequired,

}

export default IconState
