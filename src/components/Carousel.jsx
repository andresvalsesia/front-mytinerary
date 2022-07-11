
import React, { useEffect } from "react";
import { Typography, Box } from '@mui/material';
import {useDispatch,useSelector} from 'react-redux';
import cityActions from '../redux/actions/cityActions';
import Carousel from 'react-grid-carousel';






export default function CarouselReact() {

  const dispatch=useDispatch();

  useEffect(() => {
   
     dispatch(cityActions.getCities());
    

  }, [])

  const country=useSelector(store => store.cityReducer.cities)

  return (
    <Box sx={{ paddingBottom: '0.3rem' }}>
      <Typography variant="h3" color="initial" sx={{ marginBottom: '1rem', paddingLeft: '5%', fontWeight: 'bold' }} >
        Popular MYtineraries
      </Typography>

      <Carousel cols={2} rows={2} gap={10} loop autoplay={2000}
        mobileBreakpoint={300}
        responsiveLayout={[
          {
            breakpoint: 800,
            cols: 2,
            rows: 2,
            gap: 10,
            loop: true,
            autoplay: 2000
          },
          {
            breakpoint: 480,
            cols: 1,
            rows: 4,
            gap: 5,
            loop: true,
            autoplay: 2000
          }

        ]}
      >

        {
          country.map((element, index) =>
            <Carousel.Item key={index}>
              <img width="100%" className="img-carousel" src={element.img} alt={element.country} />
              <div className="div-carousel">
                <b>{element.country}-{element.city}</b>
              </div>
            </Carousel.Item>
          )
        }

      </Carousel>
    </Box>

  );

}








