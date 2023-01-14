import {  BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import AuthProvider from './Context/AuthProvider/AuthProvider';
// import Navbar from './Components/Home/Shared/Navbar/Navbar.js';
import Home from './Components/Home/Home';
import Navbar from './Components/Home/Shared/Navbar/Navbar'; 
import About from "./Components/About";
import Contact from "./Components/Home/Home/Contact/Contact";
import Project from "./Components/Home/Home/Project/Project";
import Service from "./Components/Home/Home/Service/Service";
import Clients from "./Components/Home/Home/Clients/Clients";
import Message from "./Components/Home/Message/Message";
import Footer from "./Components/Home/Shared/Footer/Footer";
function App() {
  return (
    <AuthProvider>
      <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/home" element={<Home></Home>}/>
        <Route path="/about" element={<About></About>}/>
        <Route path="/message" element={<Message></Message>}/>
        <Route path="/contact" element={<Contact></Contact>}/>
        <Route path="/project" element={<Project></Project>}/>
        <Route path="/service" element={<Service></Service>}/>
        <Route path="/client" element={<Clients></Clients>}/>
        
       
        </Routes>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
