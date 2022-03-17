import {  BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import AuthProvider from './Context/AuthProvider/AuthProvider';
// import Navbar from './Components/Home/Shared/Navbar/Navbar.js';
import Home from './Components/Home/Home/Home';
import Navbar from './Components/Home/Shared/Navbar/Navbar'; 
function App() {
  return (
    <AuthProvider>
      <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/home" element={<Home></Home>}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
