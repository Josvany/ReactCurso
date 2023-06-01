import React from 'react'
import PropTypes from 'prop-types'
import Grid  from '@mui/material/Grid';
import ForecastItem from '../ForecastItem/ForecastItem';
import { validNamesOfIcons } from '../IconState';


const renderForecastItem = forecast => 
{
    const { hour , state, temperature } = forecast
    return (
        <Grid item key={`${temperature}${hour}${state}`}>
            <ForecastItem weekDay="Martes" hour={hour} state={state} temperature={temperature} />
        </Grid>
    )
}

const Forecast = ({ forecastItemList }) => {

    let values = forecastItemList

  return (
    <Grid container justifyContent="space-around" alignItems="center">
        {
            
             values.map(forecast => renderForecastItem(forecast))
        }
    </Grid>
  )
}

Forecast.propTypes = 
{
    forecastItemList: PropTypes.arrayOf(PropTypes.shape({
        weekDay: PropTypes.string,
        hour: PropTypes.number.isRequired,
        state: PropTypes.oneOf(validNamesOfIcons).isRequired,
        temperature: PropTypes.number.isRequired,
    }).isRequired),
}

export default Forecast
