import React from 'react'
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import DraftsIcon from '@mui/icons-material/Drafts';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link as LinkRouter } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';


const Footer = () => {
  const matchMobile = useMediaQuery('(max-width:575px)');

  return (
    <Grid container sx={{ width: '%100', backgroundColor: '#354259', textAlign: 'center', padding: '1rem' }}>
      {matchMobile ? (

        <>
          <Grid item xs={12} sx={{ marginTop: '0.3rem' }}>

            <Box>
              <LinkRouter className="link" to="/index" ><HomeRoundedIcon sx={{ fontSize: "30px", color: "white", float: 'left', "&:hover": { color: '#FF7433', transition: '0.3s', transform: 'rotate(360deg)' } }} /> </LinkRouter>
              <a target="_blank" href="https://www.facebook.com/">  <FacebookIcon sx={{ fontSize: "30px", color: "white", marginLeft: '0.3rem', "&:hover": { color: '#385898', transition: '0.3s', transform: 'rotate(360deg)' } }} /></a>
              <a target="_blank" href="https://www.instagram.com/"> <InstagramIcon sx={{ fontSize: "30px", color: "white", marginLeft: '0.3rem', "&:hover": { color: '#E1306C', transition: '0.3s', transform: 'rotate(360deg)' } }} /></a>
              <a target="_blank" href="https://twitter.com/"><TwitterIcon sx={{ fontSize: "30px", color: "white", marginLeft: '0.3rem', "&:hover": { color: '#00acee', transition: '0.3s', transform: 'rotate(360deg)' } }} /></a>
              <a target="_blank" href="mailto:myitenerary@gmail.com"><DraftsIcon sx={{ fontSize: "30px", color: "white", marginLeft: '0.3rem', "&:hover": { color: '#d93025 ', transition: '0.3s', transform: 'rotate(360deg)' } }} /></a>
              <a target="_blank" href="https://github.com/andresvalsesia/mytinerary-valsesia"><GitHubIcon sx={{ fontSize: "30px", color: "white", marginLeft: '0.3rem', "&:hover": { color: 'black', transition: '0.3s', transform: 'rotate(360deg)' } }} /></a>
              <LinkRouter className="link" to="/cities" ><LanguageIcon sx={{ fontSize: "30px", color: "white", float: 'right', "&:hover": { color: '#34A853', transition: '0.3s', transform: 'rotate(360deg)' } }} /></LinkRouter>

            </Box>

          </Grid>


          <Grid item xs={12}>
            <Typography variant="h5" color='white' sx={{ fontWeight: 'bold', fontSize: '20px' }}> MyTinerary  © 2022 </Typography>
            <Typography variant="h5" color="white" sx={{ fontFamily: 'alegreya-light;', marginBottom: '0.5rem', fontSize: '20px' }} >
              MyTinerary Inc. All rights reserved.
            </Typography>

          </Grid>
        </>




      ) : (


        <>
          <Grid item xs={12} sx={{ marginTop: '0.3rem' }}>

            <Box>
              <LinkRouter className="link" to="/index" ><HomeRoundedIcon sx={{ fontSize: "35px", color: "white", float: 'left', "&:hover": { color: '#FF7433', transition: '0.3s', transform: 'rotate(360deg)' } }} /> </LinkRouter>
              <a target="_blank" href="https://www.facebook.com/">  <FacebookIcon sx={{ fontSize: "35px", color: "white", marginLeft: '0.3rem', "&:hover": { color: '#385898', transition: '0.3s', transform: 'rotate(360deg)' } }} /></a>
              <a target="_blank" href="https://www.instagram.com/"> <InstagramIcon sx={{ fontSize: "35px", color: "white", marginLeft: '0.3rem', "&:hover": { color: '#E1306C', transition: '0.3s', transform: 'rotate(360deg)' } }} /></a>
              <a target="_blank" href="https://twitter.com/"><TwitterIcon sx={{ fontSize: "35px", color: "white", marginLeft: '0.3rem', "&:hover": { color: '#00acee', transition: '0.3s', transform: 'rotate(360deg)' } }} /></a>
              <a target="_blank" href="mailto:myitenerary@gmail.com"><DraftsIcon sx={{ fontSize: "35px", color: "white", marginLeft: '0.3rem', "&:hover": { color: '#d93025 ', transition: '0.3s', transform: 'rotate(360deg)' } }} /></a>
              <a target="_blank" href="https://github.com/andresvalsesia/mytinerary-valsesia"><GitHubIcon sx={{ fontSize: "35px", color: "white", marginLeft: '0.3rem', "&:hover": { color: 'black', transition: '0.3s', transform: 'rotate(360deg)' } }} /></a>
              <LinkRouter className="link" to="/cities" ><LanguageIcon sx={{ fontSize: "35px", color: "white", float: 'right', "&:hover": { color: '#34A853', transition: '0.3s', transform: 'rotate(360deg)' } }} /></LinkRouter>

            </Box>

          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5" color='white' sx={{ fontWeight: 'bold' }}> MyTinerary  © 2022 </Typography>
            <Typography variant="h5" color="white" sx={{ fontFamily: 'alegreya-light;', marginBottom: '0.5rem' }} >
              MyTinerary Inc. All rights reserved.
            </Typography>

          </Grid>
        </>
      )}

    </Grid>
  )
}

export default Footer