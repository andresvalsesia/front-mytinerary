import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link as LinkRouter } from 'react-router-dom';
import Rotate from 'react-reveal/Rotate';




export default function CardCompon({ props }) {

  return (


    <Grid item xs={12} sm={4} md={3} >
      <Rotate top left >
        <Card sx={{ maxWidth: 345, borderRadius: '20px', textAlign: 'center',"&:hover":{transform:'scale(1.1)',boxShadow:'0px 0px 30px white'} }}>
          <CardMedia
            component="img"
            height="140"
            image={props.img}
            alt={props.country}
          />
          <CardContent sx={{backgroundColor: '#C2DED1'}}>
            <Typography gutterBottom variant="h4" color="black" component="div">
              {props.country}
            </Typography>
            <Typography variant="h5" color="black">
              {props.city}
            </Typography>
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'center' }} >
            <LinkRouter className="link" to={`/cities/${props._id}`}><button className="learn-more"
            onClick={()=>{window.scrollTo(0,0);}}
            >
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">LEARN MORE</span>
            </button></LinkRouter>
          </CardActions>
        </Card>
      </Rotate>
    </Grid>
  )
};
