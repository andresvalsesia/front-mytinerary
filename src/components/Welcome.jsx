import React from 'react'
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { Link as LinkRouter } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';



const Welcome = () => {

  const matchMobile = useMediaQuery('(max-width:575px)');
  const matchTablet = useMediaQuery('(min-width: 576px) and (max-width: 767px)');
  const matchDesktop = useMediaQuery('(min-width: 768px) and (max-width: 991px)');
  const matchXlDesktop = useMediaQuery('(min-width: 992px)');

  return (


    <>

      {
        matchMobile && (

          <Box sx={{ paddingTop: '8rem', paddingLeft: '8%', height: '95vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

            <Box>
              <Typography variant="h3" color="black" sx={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                MyTinerary
              </Typography>
              <Typography variant="h5" color="black">
                Find your perfect trip, designed by insiders who know and love their cities!
              </Typography>
            </Box>


            <Box sx={{ marginTop: '1.5rem' }}>
              <Box className="mape"></Box>
              <LinkRouter className="link" to="/cities">
                <button className='welcome'>WELCOME</button>
              </LinkRouter>
            </Box>
          </Box>

        )
      }

      {
        matchTablet && (
          <Box sx={{ paddingTop: '8rem', paddingLeft: '8%', height: '95vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

            <Box>
              <Typography variant="h3" color="black" sx={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                MyTinerary
              </Typography>
              <Typography variant="h4" color="black">
                Find your perfect trip, designed by insiders who know and love their cities!
              </Typography>
            </Box>


            <Box sx={{ marginTop: '1rem' }}>
              <Box className="mape"></Box>
              <LinkRouter className="link" to="/cities">
                <button className='welcome'>WELCOME</button>
              </LinkRouter>
            </Box>
          </Box>

        )
      }

      {
        matchDesktop && (
          <Box sx={{ paddingTop: '9rem', paddingLeft: '3%', height: '95vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box>
              <Box sx={{ height: '25vh', textAlign: 'center' }}>
                <Typography variant="h2" color="black" sx={{ marginTop: '1rem', fontWeight: 'bold' }} >
                  MyTinerary <FlightTakeoffIcon sx={{ fontSize: '4rem' }} />
                </Typography>
                <Typography variant="h4" color="black" sx={{ marginTop: '0.7rem' }} >
                  Find your perfect trip, designed by insiders who know and love their cities!
                </Typography>
              </Box>
            </Box>

            <Box sx={{ marginTop: '0.5rem' }}>
              <Box className="mape"></Box>
              <LinkRouter className="link" to="/cities">
                <button className='welcome'>WELCOME</button>
              </LinkRouter>



            </Box>
          </Box>
        )
      }


      {
        matchXlDesktop && (

          <Box sx={{ paddingTop: '3rem', paddingLeft: '3%', height: '100vh', width: '100vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

            <Box sx={{ height: '40vh', textAlign: 'center', width: '50%' }}>
              <Typography variant="h2" color="black" sx={{ marginTop: '1rem', fontWeight: 'bold' }} >
                MyTinerary <FlightTakeoffIcon sx={{ fontSize: '4rem' }} />
              </Typography>
              <Typography variant="h3" color="black" sx={{ marginTop: '1rem' }} >
                Find your perfect trip, designed by insiders who know and love their cities!
              </Typography>
            </Box>


            <Box>
              <Box className="mape"></Box>
              <LinkRouter className="link" to="/cities">
                <button className='welcome'>WELCOME</button>
              </LinkRouter>



            </Box>
          </Box>

        )
      }

    </>
  )
}



export default Welcome;

