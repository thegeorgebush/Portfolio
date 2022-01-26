import React from 'react'
import { Container, Grid, Paper, Typography, Card, CardContent, CardMedia, Box } from '@material-ui/core';
import TAImage from "../../transitAlliance.jpeg"

const contact = () => {
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
            <Card square justifyContent='center' style={{ display: 'flex'}}>
              <Box justifyContent='center' alignItems='center' style={{alignItems: 'center', display: 'flex'}}>
                <CardContent>
                  <Typography>
                    i love my gf
                  </Typography>
                  <Typography>

                  </Typography>
                  <Typography>
                    Designed and implemented a full stack web app in collaboration with Microsoft 
                    and the Transit Alliance of Miami as part of a 6-person team
                  </Typography>
                  <Typography>
                    
                  </Typography>
                  <Typography>
                    
                  </Typography>
                </CardContent>
              </Box>
              <Box>
                <CardMedia 
                component="img"
                image={TAImage}
                style={{width: 151}}
                />
              </Box>
            </Card>
          </Grid>
          <Grid item>
            <Paper square style={{padding: '20px'}}>
              <Typography>
                My gf is hot af
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper square style={{padding: '20px'}}>
              <Typography>
                And a little stinky 
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default contact
