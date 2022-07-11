import React from 'react'
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const Activity = ({props}) => {
 
  const matchMobile = useMediaQuery('(max-width:575px)');
  const matchTablet = useMediaQuery('(min-width: 576px) and (max-width: 991px)');
  const matchXlDesktop = useMediaQuery('(min-width: 992px)');

  return (
    <>
    {
      matchXlDesktop && <Box sx={{ width: '30%', height: '25rem' }}><img className="activity" src={props.img} />
      <Typography variant="h4" sx={{ fontSize: '30px', marginTop: '0.9rem',fontWeight: 'bold'}} >{props.act} </Typography>
      </Box>
    }
    
    
    {
      matchTablet &&  <Box sx={{ width: '70%', height: '25rem' }}><img className="activity" src={props.img} />
      <Typography variant="h4" sx={{ fontSize: '30px', marginTop: '1rem',fontWeight: 'bold' }} >{props.act} </Typography>
        </Box>
    }

    {
      matchMobile &&  <Box sx={{ width: '90%', height: '25rem',marginTop: '1rem' }}><img className="activity" src={props.img} />
      <Typography variant="h3" sx={{ fontSize: '27px', marginTop: '0.9rem',fontWeight: 'bold' }} >{props.act} </Typography>
        </Box>
    }

    </>
    )
 
}

export default Activity