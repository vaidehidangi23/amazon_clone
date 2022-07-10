import React, { useEffect } from "react";
import './App.css';
import { 
  BrowserRouter as Router,
  Routes, 
  Route
 } from 'react-router-dom';
import Login from './components/Login';
import Checkout from './components/Checkout';
import HomeScreen from './components/HomeScreen';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import HomeScreen2 from "./components/HomeScreen2"
import Payment from "./components/Payment";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // it will only run once when the app component loads

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in or the user was logged in

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
   
   <Route path="/checkout" element={<HomeScreen2/>} />
   
   <Route path="/payment" element={<Payment/>} />
  
   <Route path="/login" element={<Login />} />
   
         </Routes>
    
      
      </div>
      </Router>
  );
}
export default App;
