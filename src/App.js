import React, { useEffect } from "react";
import './App.css';
import { 
  BrowserRouter as Router,
  Routes, 
  Route,
 Link
 } from 'react-router-dom';
import Login from './components/Login';
import Checkout from './components/Checkout';
import HomeScreen from './components/HomeScreen';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
    <div className="App">
  
    <Routes>
    
   <Route path="/" element={<HomeScreen/>} />
   
   <Route path="/checkout" element={<Checkout />} />
   
   
   <Route path="/login" element={<Login />} />
   
         </Routes>
    
      
      </div>
      </Router>
  );
}
export default App;
