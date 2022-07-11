import axios from 'axios';
import apiUrl from '../../url';
const cityActions= {

      getCities: ()=>{

         return async(dispatch,getState)=>{
             const res= await axios.get(`${apiUrl}mytinerary/cities`);
             dispatch({type:'GET_CITIES', payload: res.data.response.cities})
         } 

      },
      
      getOneCity: (id)=>{
           
          return async(dispatch,getState)=>{
              const res= await axios.get(`${apiUrl}mytinerary/cities/${id}`);
              dispatch({type:'GET_ONE_CITIE',payload: res.data.response})
          }

      },

      filterCitie: (input)=>{
          return async (dispatch,getState)=>{
              dispatch({type:'FILTER_CITIE',payload: input})
          }
      }
}

export default cityActions;