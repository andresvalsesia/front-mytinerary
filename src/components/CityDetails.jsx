import React, {useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import activityActions from '../redux/actions/activityActions';
import cityActions from '../redux/actions/cityActions';
import itineraryActions from '../redux/actions/itineraryActions';
import { useParams } from 'react-router-dom';
import { Link as LinkRouter } from 'react-router-dom';
import Itinerary from './Itenerary';
import Bounce from 'react-reveal/Bounce';


export default function CityDetails() {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect( () => {
    
           dispatch(cityActions.getOneCity(id))
           dispatch(itineraryActions.getItinerariesByCity(id))
           dispatch(activityActions.getActivity())
                

    }, [])

    let country = useSelector(store => store.cityReducer.oneCitie);
    let itinerary = useSelector(store => store.itineraryReducer.itineraries);
    
    
    return (

        <>
            <Bounce bottom>
                <Box sx={{ width: '95%', marginTop: '5rem', marginLeft: 'auto', marginRight: 'auto' }}>


                    <Card sx={{ width: '100%', textAlign: 'center', borderRadius: '20px' }}>
                        <CardMedia
                            component="img"
                            height="180"
                            image={country.img}
                            alt={country.country}
                        />
                        <CardContent sx={{ padding: '15px' }}>
                            <Typography gutterBottom variant="h4" component="div">
                                {country.country}
                            </Typography>
                            <Typography variant="h4" color="white" sx={{ marginBottom: '0.5rem' }}>
                                {country.city}
                            </Typography>
                            <Typography variant="h5" color="white" sx={{ textAlign: 'justify', fontSize: '20px' }}>
                                {country.description}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>

                        </CardActions>
                    </Card>

                    {
                        itinerary.length > 0 ? itinerary.map((element, index) => <Itinerary key={index} cityId={id} info={element}/>)
                            : <Box sx={{ width: '100%', height: '15vh', marginTop: '1rem', marginBottom: '0.5rem', textAlign: 'center', backgroundColor: '#354259', borderRadius: '20px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                                <Typography variant="h3" color="white">AT THE MOMENT THIS CITY DOES NOT HAVE ITINERARY</Typography>

                            </Box>
                    }

                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', width: '95%', margin: '2rem auto' }}>
                    <LinkRouter className="link" to="/cities"><button className="learn-more">
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Go to Cities</span>
                    </button></LinkRouter>
                    <LinkRouter className="link" to="/index"><button className="learn-more">
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Go to Home</span>
                    </button></LinkRouter>
                </Box>
            </Bounce>
        </>
    )
};
