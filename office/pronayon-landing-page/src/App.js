import {  BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import AuthProvider from './Context/AuthProvider/AuthProvider';
// import Navbar from './Components/Home/Shared/Navbar/Navbar.js';
import Home from './Components/Home';
import Navbar from './Components/Home/Shared/Navbar/Navbar'; 
import About from "./Components/About";
import Contact from "./Components/Home/Contact";
import Project from "./Components/Home/Home/Project/Project";
import Service from "./Components/Home/Service"
import Clients from "./Components/Home/Home/Clients/Clients";
import Message from "./Components/Home/Message/Message";
import Footer from "./Components/Home/Shared/Footer/Footer";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import PrivateRoute from "./Components/PrivateRoute";




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
        <Route path="/register" element={<Register></Register>}/>
        
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/dashboard" element={<PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>}>

        <Route path={`/dashboard`} element={<Dashboard></Dashboard>} />
          {/* <Route path={`/dashboard/profile`} element={} />
          <Route path={`/dashboard/showData`} element={} />
      */}
       </Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
