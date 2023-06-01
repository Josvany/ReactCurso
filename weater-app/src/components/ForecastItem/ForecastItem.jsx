import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';
import Grid  from '@mui/material/Grid';
import { IconContext } from 'react-icons';
import  IconState, { validNamesOfIcons } from './../IconState';


const ForecastItem = ({ weekDay, hour, state, temperature }) => {
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item >
            <Typography> {weekDay} </Typography>
        </Grid>
        <Grid item >
            <Typography> {hour} </Typography>
        </Grid>
        <Grid item >
        <IconContext.Provider value={{size:'5em'}}>
            <IconState state={state} />
        </IconContext.Provider>
        </Grid>
        <Grid item >
            <Typography>{temperature} °</Typography>
        </Grid>
    </Grid>
  )
}

ForecastItem.propTypes = 
{
    weekDay: PropTypes.string, 
    hour: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validNamesOfIcons).isRequired,
    temperature: PropTypes.number.isRequired,
}

export default ForecastItem
