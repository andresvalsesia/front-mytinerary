import React, {useEffect} from 'react';
import jwt_decode from 'jwt-decode';
import {useDispatch} from 'react-redux';
import userActions from '../redux/actions/userActions';
import {useNavigate} from 'react-router-dom';

export default function GoogleSignUp(){
  const dispatch = useDispatch();
  const navigate= useNavigate(); 
  async function handleCallbackResponse(response){
       
       let userObject=jwt_decode(response.credential);
       
       let logedUser={
        
    
        email:userObject.email,
        
        password:userObject.sub,
        
        from:'google'}
        

        await dispatch(userActions.signInUser(logedUser))
        const token = localStorage.getItem('token')

        if (token) {
          navigate("/")
        }
  }

    useEffect(() => {
          /* global google */
          google.accounts.id.initialize({
            client_id:"166856637008-s1s7qedkj31lrd02dbqkqvcjp6ur9ght.apps.googleusercontent.com",
            callback: handleCallbackResponse
          });      
   
          google.accounts.id.renderButton(
            document.getElementById('buttonDiv'),
            {theme:'outline',size:'medium'}
          ) 

    });

      return (
        <div>
            <div id="buttonDiv"></div>
        </div>
      )


}