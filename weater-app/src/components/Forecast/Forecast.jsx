import React from 'react'
import PropTypes from 'prop-types'
import Grid  from '@mui/material/Grid';
import ForecastItem from '../ForecastItem/ForecastItem';
import { validNamesOfIcons } from '../IconState';


const renderForecastItem = forecast => 
{
    const { hour , weekDay, state, temperature } = forecast
    return (
        <Grid item key={`${weekDay}${hour}`}>
            <ForecastItem weekDay={weekDay} hour={hour} state={state} temperature={temperature} />
        </Grid>
    )
}

const Forecast = ({ forecastItemList }) => {
  return (
    <Grid container justifi={'center'} alignItems={'center'}>
        {
            forecastItemList.map(forecast => renderForecastItem(forecast))
        }
    </Grid>
  )
}

Forecast.propTypes = 
{
    forecastItemList: PropTypes.arrayOf(PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired,
        state: PropTypes.oneOf(validNamesOfIcons).isRequired,
        temperature: PropTypes.number.isRequired,
    }).isRequired),
}

export default Forecast
