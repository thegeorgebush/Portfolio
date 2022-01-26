import React from 'react'
import { Paper, Box, Container, Grid, Typography, ButtonGroup, Button, Avatar, AppBar, IconButton } from "@material-ui/core";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Stack from '@mui/material/Stack';

const footer = () => {
    return (
        <div>
        <Container style={{margin: '40px 0px 40px 0px'}}>
          <Grid container alignItems='center' justifyContent='space-between'>
            <Grid item style={{fontFamily: 'Avenir-light'}}>
              My gf is cute 2022©
            </Grid>
            <Grid item>
              <Grid container spacing={3}>
                <Grid item>
                <Grid container direction='column' alignItems='center' justifyContent='center'>
                    <Grid item>
                      <Typography>
                        Write
                      </Typography>
                    </Grid>
                    <Grid item style={{padding: '13px'}}>
                      <Typography variant='body' style={{fontFamily: 'Avenir-light' }}>
                        georgeabush1@gmail.com
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction='column' alignItems='center' justifyContent='center'>
                    <Grid item>
                      <Typography>
                        Follow
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Stack align="center" direction="row" style={{backgroundColor: 'white'}}>
                        <IconButton aria-label="linked in" component="span"><LinkedInIcon /></IconButton>
                        <IconButton aria-label="github" component="span"><GitHubIcon /></IconButton>
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    )
}

export default footer
