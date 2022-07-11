import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../redux/actions/userActions';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link as LinkRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GoogleSignUp from './GoogleSignUp';
import logo from '../images/mundo.png';
import { Formik,Form,Field,ErrorMessage } from 'formik';
import useMediaQuery from '@mui/material/useMediaQuery';

const theme = createTheme();

export default function SignUp() {

  const dispatch = useDispatch();
  const matchMobile = useMediaQuery('(max-width:575px)');

  useEffect(() => {

    dispatch(userActions.allCountrys())

  }, [])

  const world = useSelector(store => store.userReducer.allCountrys)


 

 



  return (
    <>
    {matchMobile ? <>
     <ThemeProvider theme={theme}>
      
     <Container component="main" maxWidth="xs" sx={{ padding: '5rem' }}>

     <CssBaseline />
     <Box sx={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
     <Avatar sx={{ m: 1,height: '70px',width: '70px',outline:'3px solid black'}} src={logo}/>
     <Typography component="h1" variant="h4"  sx={{fontWeight: 'bold'}}>
          Sign Up
        </Typography>
     </Box>
     <Box
        sx={{
          marginTop: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: "100%",
          margin:'0 auto'
        }}
      >
   
    <Formik
       
       initialValues ={{
            name:'',
            surname:'',
            email:'',
            password:'',
            repeatPassword:'',
            photoUser:'',
       }}
        
       validate={(valores)=>{
         let errores={};
         //validattion name
         if(!valores.name){
             errores.name= "Please enter a name"
         } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){
             errores.name= "The name can only contain letters"   
         }
          else if(valores.name.length<3 || valores.name.length>20){
             errores.name="The name can only contain between 3 and 20 characters"
          } 
         //validation surname  
         if(!valores.surname){
          errores.surname= "Please enter a surname"
        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.surname)){
          errores.surname= "The surname can only contain letters"   
           }
        else if(valores.surname.length<3 || valores.surname.length>20){
          errores.surname="The surname can only contain between 3 and 20 characters"
         }
         //validation correo
         if(!valores.email){
          errores.email= "Please enter your email"
        }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
          errores.email= "The email can only contain letters, numbers, periods and underscores"   
           }
         //validation password
         if(!valores.password){
          errores.password= "Please enter a password"
         } 
         else if(valores.password.length<8 || valores.password.length>20) {
          errores.password="The password can only contain between 8 and 20 characters"
         } 
         if(valores.password!==valores.repeatPassword){
          errores.repeatPassword="The passwords do not match"
         }
         if(!valores.photoUser){
           errores.photoUser="Enter a profile picture"
         }
          else if(valores.photoUser.length<10){
            errores.photoUser="The image can only contain minimum 10 characters"
          }

         return errores;

       }}
       onSubmit={(valores,{resetForm}) =>{  
         

         const userData = {
          name: valores.name,
          surname: valores.surname,
          email: valores.email,
          password: valores.password,
          photoUser: valores.photoUser,
          country: valores.country,
          from: 'form-signup'
        };
    
        dispatch(userActions.signUpUserMessage(userData))
        
        resetForm();
       }}
    >
      {({errors}) => (

              <Form className="formulario-small">

                <div>
                  <label htmlFor="name">Name *: </label>
                  <Field type="text"
                  id="name"
                  name="name"
                  className="field"
                  
                  />
                 <ErrorMessage name="name" component={()=>(<div className="error">{errors.name}</div>)} />
                 
                </div>
                <div>
                  <label htmlFor="surname">Surname *: </label>
                  <Field type="text"
                  id="surname"
                  name="surname"
                  className="field"
                  />
                  <ErrorMessage name="surname" component={()=>(<div className="error">{errors.surname}</div>)} />
                </div>

                <div >
                  <label htmlFor="email">Email *: </label>
                  <Field type="email"
                  id="email"
                  name="email"
                  placeholder="email@email.com"
                  className="field"
                  />
                  <ErrorMessage name="email" component={()=>(<div className="error">{errors.email}</div>)} />
                </div>

                <div>
                  <label htmlFor="password">Password *:</label>
                  <Field type="password"
                  id="password"
                  name="password"
                  className="field"
                  />
                  <ErrorMessage name="password" component={()=>(<div className="error">{errors.password}</div>)} />
                </div>

                <div>
                  <label htmlFor="password">Repeat Password *:</label>
                  <Field type="password"
                  id="password2"
                  name="repeatPassword"
                  className="field"
                  />
                  <ErrorMessage name="repeatPassword" component={()=>(<div className="error">{errors.repeatPassword}</div>)} />
                </div>

                <div>
                  <label htmlFor="image">Image *: </label>
                  <Field type="text"
                  id="image"
                  name="photoUser"
                  className="field"
                  />
                  <ErrorMessage name="photoUser" component={()=>(<div className="error">{errors.photoUser}</div>)} />
                </div>

                <div className="google2">
                  <Field name="country" as="select" className="select-css">
                  <option value="" selected> Select a country *</option>
                  {world.map((country, index) => <option key={index} value={country}>{country}</option>)}
                  </Field>
                </div>

                <button
                  type="submit"
                >
                  Sign Up
                </button>
                <div className="google">
                <GoogleSignUp />
                </div>
                <LinkRouter className="link" to="/login" variant="body2" sx={{ color: 'white' }}>
                  <Typography sx={{textDecoration:'underline',paddingLeft:'2%'}} variant="h6" color="white">Already have an account? Sign in</Typography>    
                    </LinkRouter>      
              </Form>
       


      )}

    </Formik>
    </Box>
    </Container>
    </ThemeProvider>
    </> : <><ThemeProvider theme={theme}>
      
      <Container component="main" maxWidth="xs" sx={{ padding: '5rem' }}>

      <CssBaseline />
      <Box sx={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Avatar sx={{ m: 1,height: '70px',width: '70px',outline:'3px solid black'}} src={logo}/>
      <Typography component="h1" variant="h3"  sx={{fontWeight: 'bold'}}>
           Sign Up
         </Typography>
      </Box>
      <Box
         sx={{
           marginTop: 1,
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
         }}
       >
    
     <Formik
        
        initialValues ={{
             name:'',
             surname:'',
             email:'',
             password:'',
             repeatPassword:'',
             photoUser:'',
        }}
         
        validate={(valores)=>{
          let errores={};
          //validattion name
          if(!valores.name){
              errores.name= "Please enter a name"
          } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){
              errores.name= "The name can only contain letters"   
          }
           else if(valores.name.length<3 || valores.name.length>20){
              errores.name="The name can only contain between 3 and 20 characters"
           } 
          //validation surname  
          if(!valores.surname){
           errores.surname= "Please enter a surname"
         }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.surname)){
           errores.surname= "The surname can only contain letters"   
            }
         else if(valores.surname.length<3 || valores.surname.length>20){
           errores.surname="The surname can only contain between 3 and 20 characters"
          }
          //validation correo
          if(!valores.email){
           errores.email= "Please enter your email"
         }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
           errores.email= "The email can only contain letters, numbers, periods and underscores"   
            }
          //validation password
          if(!valores.password){
           errores.password= "Please enter a password"
          } 
          else if(valores.password.length<8 || valores.password.length>20) {
           errores.password="The password can only contain between 8 and 20 characters"
          } 
          if(valores.password!==valores.repeatPassword){
           errores.repeatPassword="The passwords do not match"
          }
          if(!valores.photoUser){
            errores.photoUser="Enter a profile picture"
          }
           else if(valores.photoUser.length<10){
             errores.photoUser="The image can only contain minimum 10 characters"
           }

          return errores;

        }}
        onSubmit={(valores,{resetForm}) =>{  
          

          const userData = {
           name: valores.name,
           surname: valores.surname,
           email: valores.email,
           password: valores.password,
           photoUser: valores.photoUser,
           country: valores.country,
           from: 'form-signup'
         };
     
         dispatch(userActions.signUpUserMessage(userData))
         
         resetForm();
        }}
     >
       {({errors}) => (

               <Form className="formulario">

                 <div>
                   <label htmlFor="name">Name *: </label>
                   <Field type="text"
                   id="name"
                   name="name"
                   className="field"
                   
                   />
                  <ErrorMessage name="name" component={()=>(<div className="error">{errors.name}</div>)} />
                  
                 </div>
                 <div>
                   <label htmlFor="surname">Surname *: </label>
                   <Field type="text"
                   id="surname"
                   name="surname"
                   className="field"
                   />
                   <ErrorMessage name="surname" component={()=>(<div className="error">{errors.surname}</div>)} />
                 </div>

                 <div >
                   <label htmlFor="email">Email *: </label>
                   <Field type="email"
                   id="email"
                   name="email"
                   placeholder="email@email.com"
                   className="field"
                   />
                   <ErrorMessage name="email" component={()=>(<div className="error">{errors.email}</div>)} />
                 </div>

                 <div>
                   <label htmlFor="password">Password *:</label>
                   <Field type="password"
                   id="password"
                   name="password"
                   className="field"
                   />
                   <ErrorMessage name="password" component={()=>(<div className="error">{errors.password}</div>)} />
                 </div>

                 <div>
                   <label htmlFor="password">Repeat Password *:</label>
                   <Field type="password"
                   id="password2"
                   name="repeatPassword"
                   className="field"
                   />
                   <ErrorMessage name="repeatPassword" component={()=>(<div className="error">{errors.repeatPassword}</div>)} />
                 </div>

                 <div>
                   <label htmlFor="image">Image *: </label>
                   <Field type="text"
                   id="image"
                   name="photoUser"
                   className="field"
                   />
                   <ErrorMessage name="photoUser" component={()=>(<div className="error">{errors.photoUser}</div>)} />
                 </div>

                 <div>
                   <Field name="country" as="select" className="select-css">
                   <option value="" selected> Select a country *</option>
                   {world.map((country, index) => <option key={index} value={country}>{country}</option>)}
                   </Field>
                 </div>

                 <button
                   type="submit"
                 >
                   Sign Up
                 </button>
                 <GoogleSignUp />
                 <LinkRouter className="link" to="/login" variant="body2" sx={{ color: 'white' }}>
                   <Typography sx={{textDecoration:'underline'}} variant="h5" color="white">Already have an account? Sign in</Typography>    
                     </LinkRouter>      
               </Form>
        


       )}

     </Formik>
     </Box>
     </Container>
     </ThemeProvider></>
    }


    
      </>
  );
}



         