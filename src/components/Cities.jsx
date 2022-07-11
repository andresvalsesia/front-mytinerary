import React, { useState, useEffect } from 'react';
import CardCompon from './CardCompon';
import {useDispatch,useSelector} from 'react-redux';
import cityActions from '../redux/actions/cityActions';
import itineraryActions from '../redux/actions/itineraryActions';
import Rotate from 'react-reveal/Rotate';
import { Grid, Box,Typography } from '@mui/material';


const Cities = () => {
  
  const dispatch=useDispatch()
  const [search, setSearch] = useState("");
  

  useEffect(() => {
        dispatch(cityActions.getCities())
     
        dispatch(cityActions.filterCitie(search))
        

  }, [search])

  let cities=useSelector(store=>store.cityReducer.cities)
  let data= useSelector(store=>store.cityReducer.filterCity)
 
  console.log(data) 

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>

        <div className="group">
          <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input placeholder="Search" type="search" className="input"
            onChange={(e) => { setSearch(e.target.value) }}
          />
        </div>
      </Box>
      {
       cities && 
           <Grid container spacing={2} sx={{ padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            {
             search=="" ? cities.map((element, index) => <CardCompon key={index} props={element} />)
             : <>
                {data.length>0 ? 
          
                       <>
                       {
                       data.map((element, index) => <CardCompon key={index} props={element} />)

                         }
                </>
        : <Grid container sx={{ height: '60vh', width: '100vw' }} >
            <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Rotate top left>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <img className="dont-result" src="https://cdn-icons-png.flaticon.com/512/6202/6202861.png"></img>
                 <Typography variant="h4" sx={{fontWeight: 'bold',marginTop:'1rem'}}>NO RESULTS FOUND</Typography>
                </Box>
              </Rotate>
            </Grid>   
          </Grid>
                  }
              </>

            }
        </Grid>
       }                        
    </>
  )
}



export default Cities;