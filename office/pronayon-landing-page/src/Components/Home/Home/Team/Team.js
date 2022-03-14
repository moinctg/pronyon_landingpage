import React from 'react';
import './Team.css';
import team1 from '../../../../Images/Team1.png'
import team2 from '../../../../Images/Team2.png'
import team3 from '../../../../Images/Team3.png'
import team4 from '../../../../Images/Team4.png'

const Team = () => {
    return (
        <div className="container team-back">
            <div className="row">
                <div className="col-lg-6 pt-4 text-white text-center">
                    <h6>ALL</h6>
                    <h6>ARCHITECTS</h6>
                    <h6>ADMINISTRATION</h6>
                    <h6>ENGINEERS</h6>
                    <h6>ELECTRICAL ENGINEERS</h6>
                    
                </div>
                <div className="col-lg-6">
                    <h6 className="p-3 text-white text-center">Our Team</h6>
                    

                </div>
                <div className="row">
                    <div className="col-md-3 ">
                        <img src={team1} alt=""/>
                        
                    </div>
                    <div className="col-md-3  ">
                    <img src={team2} alt=""/>

                    </div>
                    <div className="col-md-3">
                    <img src={team3} alt=""/>

                    </div>
                    <div className="col-md-3">
                    <img src={team4} alt=""/>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Team;