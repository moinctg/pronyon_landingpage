import React from 'react';
import Banner from './Banner/Banner';
import Team from './Team/Team';
import Service from './Service/Service';
import Project from './Project/Project';
import Clients from './Clients/Clients';
import Footer from './Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
const Home = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Banner></Banner>
            <Team></Team>
            <Service></Service>
            <Clients></Clients>
        
            <Project></Project>
            <Footer></Footer>
        </div>
    );
};

export default Home;