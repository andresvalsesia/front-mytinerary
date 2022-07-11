import axios from 'axios';
import apiUrl from '../../url';

const itineraryActions= {

    getItinerary: ()=>{

       return async(dispatch,getState)=>{
           const res= await axios.get(`${apiUrl}mytinerary/itineraries`);
           dispatch({type:'GET_ITINERARY', payload: res.data.response.cities})
       } 

    },

     getOneItinerary: (id) => {

        return async () => {
          
                let res = await axios.get(`${apiUrl}mytinerary/itineraries/${id}`)
                
                return res.data.response
        }
    },

    filterItinerary: (id)=>{
        return async (dispatch,getState)=>{
            dispatch({type:'FILTER_ITINERARY',payload: id})
        }
    },

    likeDisLike:(id)=>{

        const token = localStorage.getItem('token')
        return async () => {
            try {
                let response = await axios.put(`${apiUrl}mytinerary/itineraries/like/${id}`, {},
                {headers: {
                    Authorization: "Bearer "+token
                    }
                })
              
                return response
                
            }catch (error) {
                console.log(error)
            }
        }
           
    },

    getItinerariesByCity: (id) => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.get(`${apiUrl}mytinerary/cities/${id}/itineraries`);
                dispatch({
                    type: 'GET_ITINERARIES_BY_CITY',
                    payload: res.data.response
                })
            } catch (error) {
                console.log(error);
            }
        };
    }

}

export default itineraryActions;