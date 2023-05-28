import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "swiper/css/bundle";
import reportWebVitals from './reportWebVitals';

// import ReactDOM from "react-dom/client";





ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Routes>
    <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Navigate from="/" to="/admin/dashboard" />
    </Routes> */}
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
