import React from 'react';
import { Paper, Box, Container, Grid, Typography, ButtonGroup, Button, Avatar, AppBar, IconButton } from "@material-ui/core";
import Stack from '@mui/material/Stack';
import avatar from "../../components/PortfolioShot.jpg";
//import useStyles from './styles';
import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';



const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: 'linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%)'
    }
}));

const about = () => {
  //const classes = useStyles();

  return (
    <>
      <div style={{background: 'linear-gradient(90deg, #edddcc 40%, #ffffff 40%)', margin: '180px 0px 0px 0px'}}>
        <Container>
          <Grid container 
          spacing={3} 
          justifyContent="center" 
          alignItems="center" 
          style={{ minHeight: '100vh' }}
          
          >
            <Grid item>
              <Paper box elevation={3} style={{ backgroundColor: '#f0e8df', display: 'flex'}}>
                  <Grid container direction="column" justifyContent="space-between" spacing={4} alignItems='center'>
                    <Grid item>
                      <Avatar justifyContent="center" alignItems="center" alt="George Bush" src={avatar} style={{ width: 200, height: 200, margin: '20px'}} />
                    </Grid>
                    <Grid item>
                      <Typography variant='h4' align="center" style={{fontWeight: 'bold'}}>
                          George Bush
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='h4' style={{color: 'blue', fontWeight: 'bold'}}>
                        ⎯⎯⎯⎯⎯⎯⎯⎯
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='h6' color="textSecondary" align="center" style={{fontFamily: 'Avenir-light'}}>
                          Front End Web Developer
                      </Typography>
                    </Grid>
                    <Grid item >
                      <Stack align="center" direction="row" style={{backgroundColor: 'white', padding: '0px 137px 0 137px', margin: 0}}>
                        <IconButton aria-label="linked in" component="span"><LinkedInIcon /></IconButton>
                        <IconButton aria-label="github" component="span"><GitHubIcon /></IconButton>
                      </Stack>
                    </Grid>
                  </Grid>
                  
              </Paper>
              </Grid>
              <Grid item>
                <Paper elevation={0} style={{padding: '100px 10px', maxWidth: '350px', maxHeight: '350px'}}>
                  <Grid container direction="column" spacing={4}>
                    <Grid item>
                      <Typography variant='h1' style={{fontWeight: 'bold'}}>
                        Hello
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='h5' color='textSecondary'>
                        I'm George, Web Developer
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Stack spacing={2} direction="row">
                        <Button variant="contained" color="primary">Resume</Button>
                        <Button variant="outlined">Contact</Button>
                      </Stack>
                    </Grid>
                    <Grid item>
                      <Typography variant='p' style={{fontFamily: 'Avenir-light'}}>
                        I'm a recent grad from Florida International University looking for work as a Front End Web Developer.
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='p' style={{fontFamily: 'Avenir-light'}}>
                        I'm a strong, hard working, and highly motivated individual who gets the job done!
                      </Typography>
                    </Grid>
                  </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}

export default about
