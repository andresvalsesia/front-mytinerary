import React from 'react';
import Avatar from '@mui/material/Avatar';
import { useDispatch} from 'react-redux';
import userActions from '../redux/actions/userActions';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link as LinkRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik, Form, Field } from 'formik';
import GoogleSignIn from './GoogleSignIn';
import logo from '../images/mundo.png';
import useMediaQuery from '@mui/material/useMediaQuery';




const theme = createTheme();

export default function SignIn() {



  const dispatch = useDispatch();
  const navigate = useNavigate();
  const matchMobile = useMediaQuery('(max-width:575px)');




  return (
    <>

    {matchMobile ? <>
      <ThemeProvider theme={theme}>

<Container component="main" maxWidth="xs" sx={{ padding: '5rem' }}>

  <CssBaseline />
  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <Avatar sx={{ m: 1, height: '70px', width: '70px', outline: '3px solid black' }} src={logo} />
    <Typography component="h1" variant="h3" sx={{ fontWeight: 'bold' }}>
      Sign In
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

      initialValues={{

        email: '',
        password: ''

      }}

      onSubmit={async (valores, { resetForm }) => {

        const logedUser = {

          email: valores.email,
          password: valores.password,
          from: 'form-signup'
        };

      await dispatch(userActions.signInUser(logedUser))
        const token = localStorage.getItem('token')

        if (token) {
          navigate("/")
        }



        resetForm();

      }}
    >
      {({ }) => (

        <Form className="formulario-small2">


          <div >
            <label htmlFor="email">Email: </label>
            <Field type="email"
              id="email"
              name="email"
              placeholder="email@email.com"
              className="field"
            />

          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password"
              id="password"
              name="password"
              className="field"
            />

          </div>

          <button
            type="submit"
          >
            Sign In
          </button>
          <div className="google">
          <GoogleSignIn/>
          </div>
          
          <LinkRouter className="link" to="/register" variant="body2" sx={{ color: 'white' }}>
            <Typography sx={{ textDecoration: 'underline', marginTop: '1.2rem',paddingLeft:'2%',fontSize:'18px' }} variant="h6" color="white">You do not have an account? Sign Up</Typography>
          </LinkRouter>
        </Form>



      )}

    </Formik>
  </Box>

</Container>
</ThemeProvider>
     
    </>: <>
    <ThemeProvider theme={theme}>

<Container component="main" maxWidth="xs" sx={{ padding: '5rem' }}>

  <CssBaseline />
  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <Avatar sx={{ m: 1, height: '70px', width: '70px', outline: '3px solid black' }} src={logo} />
    <Typography component="h1" variant="h3" sx={{ fontWeight: 'bold' }}>
      Sign In
    </Typography>
  </Box>
  <Box
    sx={{
      marginTop: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100%'
    }}
  >

    <Formik

      initialValues={{

        email: '',
        password: ''

      }}

      onSubmit={async (valores, { resetForm }) => {

        const logedUser = {

          email: valores.email,
          password: valores.password,
          from: 'form-signup'
        };

      await dispatch(userActions.signInUser(logedUser))
        const token = localStorage.getItem('token')

        if (token) {
          navigate("/")
        }



        resetForm();

      }}
    >
      {({ }) => (

        <Form className="formulario2">


          <div >
            <label htmlFor="email">Email: </label>
            <Field type="email"
              id="email"
              name="email"
              placeholder="email@email.com"
              className="field"
            />

          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password"
              id="password"
              name="password"
              className="field"
            />

          </div>

          <button
            type="submit"
          >
            Sign In
          </button>
          <GoogleSignIn/>
          <LinkRouter className="link" to="/register" variant="body2" sx={{ color: 'white' }}>
            <Typography sx={{ textDecoration: 'underline', marginTop: '1rem' }} variant="h5" color="white">You do not have an account? Sign Up</Typography>
          </LinkRouter>
        </Form>



      )}

    </Formik>
  </Box>

</Container>
</ThemeProvider>
    
    </>}
     
      );


    </>
  );
}