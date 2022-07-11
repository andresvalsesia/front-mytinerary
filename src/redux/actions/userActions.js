import axios from 'axios';
import apiUrl from '../../url';
const userActions={
         

         signUpUserMessage: (userData)=>{

            return async(dispatch,getState)=>{
                const res= await axios.post(`${apiUrl}mytinerary/auth/register`,{userData});
                dispatch({type:'SIGN_UP', payload: {view:true,message:res.data.message,success:res.data.success}});
            } 
         },

         signInUser:(logedUser)=>{

            return async(dispatch,getState)=>{
                const res= await axios.post(`${apiUrl}mytinerary/auth/login`, {logedUser});
                if(res.data.success){
                    localStorage.setItem('token',res.data.response.token)
                    dispatch({type:'SIGN_IN', payload:{view:true,message:res.data.message,success:res.data.success,response:res.data.response.userData}});
                }

                dispatch({type:'MESSAGE', payload: {view:true,message:res.data.message,success:res.data.success}});
            } 
         },

         signOutUser:() =>{
               return async(dispatch,getState) =>{
                 /* const res= await axios.post('http://localhost:4000/mytinerary/auth/signOut',{closeuser}) */
                 localStorage.removeItem('token')
                 dispatch({type:'SIGN_IN', payload: null});
               }
         },
        
         verificarToken:(token)=>{

                   return async(dispatch,getState)=>{
                             await axios.get(`${apiUrl}mytinerary/auth/signInToken`,{
                                headers:{
                                    'Authorization': 'Bearer ' + token
                                }
                             })

                             .then(user=>{
                                if(user.data.success){
                                    dispatch({type:'SIGN_IN', payload:{view:true,message:user.data.message,success:user.data.success,response:user.data.response.userData}});
                                }
                                
                                else{localStorage.removeItem('token')}
                             })
                             .catch(error=>{
                                if(error.response.status===401){
                                    dispatch({type:'MESSAGE',payload:{view:true,message:"Please make your signIn again",success:false}})
                                    localStorage.removeItem('token')
                                }
                             })
                   }
         },

         allCountrys: ()=>{

               return async(dispatch,getState)=>{
                const res= await axios.get('https://restcountries.com/v3.1/all')
                dispatch({type:'ALL_COUNTRY', payload: res.data.map(data=>data.name.common)})
             
            }
        }
}

export default userActions;