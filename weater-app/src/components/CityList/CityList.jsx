import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from './../CityInfo/CityInfo';
import Weather from '../Weather/Weather';
import Grid  from '@mui/material/Grid';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';

const renderCityAndCountry = eventonClickCity => cityAndCountry => 
{
    const { city, country } = cityAndCountry;

    return ( 
            <ListItem button key={city} onClick={eventonClickCity}>
                <Grid container justifyContent='center' alignItems={'center'}>
                    <Grid item sm={8} xs={12}>
                        <CityInfo city={city} country={country} />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Weather temperature={10} state='sunny'/>
                    </Grid>
                    
                </Grid>
                
            </ListItem>
            
           )
}


const CityList = ({ cities, onClickCity }) => {
  return (
    <List>
      {
        cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
      }
    </List>
  )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
