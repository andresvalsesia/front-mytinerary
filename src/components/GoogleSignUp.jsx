import React, {useEffect} from 'react';
import jwt_decode from 'jwt-decode';
import {useDispatch} from 'react-redux';
import userActions from '../redux/actions/userActions';

export default function GoogleSignUp(){
  const dispatch = useDispatch();
   
  async function handleCallbackResponse(response){
       
       let userObject=jwt_decode(response.credential);
       
       let userData={
        name:userObject.given_name,
        surname:userObject.family_name,
        email:userObject.email,
        photoUser:userObject.picture,
        password:userObject.sub,
        country:'Argentina',
        from:'google'}
        dispatch(userActions.signUpUserMessage(userData))
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