import React from 'react';
import Banner from './Banner/Banner';
import Team from './Team/Team';
import Service from './Service/Service';
import Project from './Project/Project';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Team></Team>
            <Service></Service>
            <Project></Project>
            <Footer></Footer>
        </div>
    );
};

export default Home;