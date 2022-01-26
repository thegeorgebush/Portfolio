import React from 'react'
import { AppBar, Grid, Typography, ButtonGroup, Button, Box} from '@material-ui/core'
import { Link } from 'react-router-dom';
import SquareIcon from '@mui/icons-material/Square';


const navbar = () => {
  return (
    <div>
        <AppBar position='fixed' style={{backgroundColor: 'white',  boxShadow: '1px 1px'}}>
          <Grid container alignItems="center" justifyContent="space-between" style={{padding: '0px 40px 0px 40px', margin: '40px 0px 40px 0px'}}>
            <Grid item direction='row'>
              <Grid container spacing={2} alignContent='center' justifyContent='center'>
                <Grid item>
                  <Typography variant="h4" color='textPrimary' style={{fontWeight: 'bold'}}>
                    <SquareIcon style={{color: 'blue'}}/> George Bush
                  </Typography>
                </Grid>
                <Grid item >
                  <Box style={{ display: 'flex', maxWidth: '20px'}}>
                  <Typography variant="h6" color='textSecondary' style={{fontFamily: 'Avenir-light'}}>
                    /Front End Web Developer
                  </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item  >
              <ButtonGroup >
                <Button variant="text" component={Link} type="button" to="/">About</Button>
                <Button variant="text" component={Link} type="button" to="/Resume">Resume</Button>
                <Button variant="text" component={Link} type="button" to="/Projects">Projects</Button>
                <Button variant="text" component={Link} type="button" to="/Contact">Projects</Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </AppBar>
      </div>
  )
}

export default navbar
