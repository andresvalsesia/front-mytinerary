import React, { useEffect } from 'react'
import NavBar from './components/NavBar'
import Main from './components/Main'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom';
import Cities from './components/Cities';
import CityDetails from './components/CityDetails';
import { useDispatch, useSelector } from 'react-redux';
import userActions from './redux/actions/userActions';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Error from './components/Error';
import ScrollToTop from 'react-scroll-to-top';
import { ToastContainer, toast } from 'react-toastify';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.css";
import './styles/App.css';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    if (localStorage.getItem('token') !== null) {
      const token = localStorage.getItem('token');
      dispatch(userActions.verificarToken(token))
    }

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);

  }, [])



  let message = useSelector(store => store.userReducer.snackbar)

  if (message.view) {

    message.success ? toast.success(message.message, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    :
     
        toast.warn(message.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }) 
       
        
    if(Array.isArray(message.message)){
       message.message.map((text)=>{toast['error'](text.message)}) 
    }

     dispatch({ type: 'MESSAGE', payload: { view: false, message: "", success: false } }) 
  }

  let user = useSelector(store => store.userReducer.user)

  return (
    <>
      <NavBar />
      <main className="main-container">

        <Routes>
          <Route path="cities/:id" element={<CityDetails />} />
          <Route path="/" element={<Main />} />
          <Route path="/index" element={<Main />} />
          <Route path="/cities" element={<Cities />} />
          {!user && <Route path="/register" element={<SignUp />} />}
          {!user && <Route path="/login" element={<SignIn />} />}
          <Route path="/*" element={<Error />} />
        </Routes>

      </main>
      <Footer />
      <ScrollToTop style={{ right: '8px' }}
        smooth
        viewBox="0 0 24 24"
        component={<ArrowUpwardIcon />}
      />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>


  );
}

export default App;
