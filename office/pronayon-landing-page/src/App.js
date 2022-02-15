import {  BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import * as React from "react";
import AuthProvider from './Context/AuthProvider/AuthProvider';

import Home from './Components/Home/Home/Home'; 
function App() {
  return (
    <AuthProvider>
      <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/home" element={<Home></Home>}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
