import axios from 'axios';
import apiUrl from '../../url';

const activityActions= {

    getActivity: ()=>{

       return async(dispatch,getState)=>{
           const res= await axios.get(`${apiUrl}mytinerary/activity`);
           dispatch({type:'GET_ACTIVITY', payload: res.data.response.activitis})
       } 

    },
    
    getOneActivity: (id)=>{
         
        return async(dispatch,getState)=>{
            const res= await axios.get(`${apiUrl}mytinerary/activity/${id}`);
            dispatch({type:'GET_ONE_ACTIVITY',payload: res.data.response})
        }

    }


}

export default activityActions;