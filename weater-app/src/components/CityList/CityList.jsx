import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from './../CityInfo/CityInfo';
import Weather from '../Weather/Weather';
import Grid  from '@mui/material/Grid';

const renderCityAndCountry = eventonClickCity => cityAndCountry => 
{
    const { city, country } = cityAndCountry;

    return ( 
            <li key={city} onClick={eventonClickCity}>
                <Grid container justifyContent='center' alignItems={'center'}>
                    <Grid item sm={8} xs={12}>
                        <CityInfo city={city} country={country} />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Weather temperature={10} state='sunny'/>
                    </Grid>
                    
                </Grid>
                
            </li>
            
           )
}


const CityList = ({ cities, onClickCity }) => {
  return (
    <ul>
      {
        cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
      }
    </ul>
  )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
