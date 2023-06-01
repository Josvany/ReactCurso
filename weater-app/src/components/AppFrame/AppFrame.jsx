import React from 'react'
import PropTypes from 'prop-types'
import { AppBar } from '@material-ui/core/AppBar'
import { Grid } from '@material-ui/core/Grid'
import { Toolbar } from '@material-ui/core/Toolbar'
import { IconButton } from '@material-ui/core/IconButton'
import { Link } from '@material-ui/core/Link'
import { IconContext } from 'react-icons/lib/cjs/iconContext'
import { WiDaySunny } from 'react-icons/wi'
import { Link as LinkRouter } from 'react-router-dom';
const AppFrame = props => {
  return (
    <Grid container justify="center">
      <AppBar position="static">
        <Toolbar variant="dense">
            <IconButton color="inherit" aria-label="menu">
                <Link component={LinkRouter} to="/main" color="inherit" aria-label="menu">
                    <IconContext.Provider value={{size: '2em'}}>
                        <WiDaySunny />
                    </IconContext.Provider>
                </Link>
            </IconButton>
        </Toolbar>
      </AppBar>
    </Grid>
  )
}

AppFrame.propTypes = {

}

export default AppFrame
