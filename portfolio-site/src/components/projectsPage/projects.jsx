import React from 'react'
import { Container, Grid, Paper, Typography, Card, CardContent, CardMedia, Box } from '@material-ui/core';
import TAImage from "../../transitAlliance.jpeg"
import UnderlineImage from "../../UnderlinePark.jpg"
import BitcoinImage from "../../bitcoin.jpeg"
import SquareIcon from '@mui/icons-material/Square';

const projects = () => {
  return (
    <div style={{backgroundColor: '#edddcc', margin: '180px 0px 0px 0px'}}>
      <Container>
        <Grid container 
        style={{ minHeight: '100vh' }}
        justifyContent="center" 
        alignItems="center" 
        spacing={3}
        direction='column'
        >
          <Grid item>
            <Paper elevation={0} style={{backgroundColor: '#edddcc'}}>
              <Typography variant='h4'  style={{fontWeight: 'bold', margin: '50px'}}>
                <SquareIcon style={{color: 'blue'}}/> Projects
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Card square justifyContent='center' style={{ display: 'flex', maxWidth: '800px'}}>
              <Box justifyContent='center' alignItems='center' style={{alignItems: 'center', display: 'flex'}}>
                <CardContent>
                  <Typography variant='h5' style={{fontFamily: 'Avenir-light', fontWeight: 'bold', color: 'blue'}}>
                    | Better Bus Project WebApp
                  </Typography>
                  <Typography variant='h6'>
                    Front End Developer
                  </Typography>
                  <br />
                  <Typography style={{fontFamily: 'Avenir-light'}}>
                    Designed and implemented a full stack web app in collaboration with Microsoft 
                    and the Transit Alliance of Miami as part of a 6-person team
                  </Typography>
                  <br />
                  <Typography style={{fontFamily: 'Avenir-light'}}>
                    Built web app with React for the 2022 Better Bus Redesign that would help the more 
                    than 400,000 daily transit riders in Miami visualize change in bus routes
                  </Typography>
                  <br />
                  <Typography style={{fontFamily: 'Avenir-light'}}>
                    Developed landing page, route drawing, autofill integration, and other map focused design elements. 
                  </Typography>
                </CardContent>
              </Box>
              <Box>
                <CardMedia 
                component="img"
                image={TAImage}
                style={{width: 351}}
                />
              </Box>
            </Card>
          </Grid>
          <Grid item>
            <Card square justifyContent='center' style={{ display: 'flex', maxWidth: '800px'}}>
              <Box justifyContent='center' alignItems='center' style={{alignItems: 'center', display: 'flex'}}>
                <CardContent>
                  <Typography variant='h5' style={{fontFamily: 'Avenir-light', fontWeight: 'bold', color: 'blue'}}>
                    | Underline Park App
                  </Typography>
                  <Typography variant='h6'>
                    Front End Developer
                  </Typography>
                  <br />
                  <Typography style={{fontFamily: 'Avenir-light'}}>
                    Worked with Microsoft and the Friends of the Underline park on a team of 6 to develop a web 
                    application that allowed users to create and view events occurring in the park.
                  </Typography>
                  <br />
                  <Typography style={{fontFamily: 'Avenir-light'}}>
                    Used React and Leaflet to display an interactive map onto the 
                    webpage that revealed the boundaries of the park and points of interest 
                  </Typography>
                </CardContent>
              </Box>
              <Box>
                <CardMedia 
                component="img"
                image={UnderlineImage}
                style={{width: 351, height: 310}}
                />
              </Box>
            </Card>
          </Grid>
          <Grid item>
          <Card square justifyContent='center' style={{ display: 'flex', maxWidth: '800px'}}>
              <Box justifyContent='center' alignItems='center' style={{alignItems: 'center', display: 'flex'}}>
                <CardContent>
                  <Typography variant='h5' style={{fontFamily: 'Avenir-light', fontWeight: 'bold', color: 'blue'}}>
                    | Bitcoin Trading Bot
                  </Typography>
                  <Typography variant='h6'>
                    Python
                  </Typography>
                  <br />
                  <Typography style={{fontFamily: 'Avenir-light'}}>
                    Created a bitcoin trading bot using python. This bot was profitable 60% of the time during the second bitcoin boom.
                  </Typography>
                </CardContent>
              </Box>
              <Box>
                <CardMedia 
                component="img"
                image={BitcoinImage}
                style={{width: 351, height: 310}}
                />
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default projects
