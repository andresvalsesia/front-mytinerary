import React from 'react';
import { Grid } from '@mui/material';
import error from '../images/404.jpg';


const Error = () => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <img className="error" src={error} alt="not found" />
      </Grid>
    </Grid>
  )
}



export default Error