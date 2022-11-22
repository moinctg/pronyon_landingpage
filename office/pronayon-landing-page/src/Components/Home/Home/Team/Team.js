import React from "react";
import "./Team.css";
import team1 from "../../../../Images/Team1.png";
import team2 from "../../../../Images/Team2.png";
import team3 from "../../../../Images/Team3.png";
import team4 from "../../../../Images/Team4.png";

const Team = () => {
  return (
    <div className="team-back">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pt-4">
            <h6 className="text-white ">ALL</h6>
            <h6>ARCHITECTS</h6>
            <h6>ADMINISTRATION</h6>
            <h6>ENGINEERS</h6>
            <h6>ELECTRICAL ENGINEERS</h6>
          </div>
          <div className="col-lg-6">
            <h3 className="p-3 text-white text-right">Our Team</h3>
          </div>
          <div className="row  p-3">
            <div className="col-md-3  ">
              <img className="img" src={team1} alt="" />
              <div className="style mt-4">
                <div className="team-title">
                  <p className="p-3 ">
                    {" "}
                    <span className="fs-4 text-white ">Marcus Owens</span>
                    <br /> Architects
                  </p>
                  <p className="p-3 text-white team-social ">
                    {" "}
                    Facebook <br /> Linkdin{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <img className="img" src={team2} alt="" />
              <div className="style mt-4">
                <div className="team-title">
                  <p className="p-3 ">
                    {" "}
                    <span className="fs-4 text-white ">Marcus Owens</span>
                    <br /> Architects
                  </p>
                  <p className="p-3 text-white  team-social">
                    {" "}
                    Facebook <br /> Linkdin{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <img className="img" src={team3} alt="" />
              <div className="style mt-4">
                <div className="team-title">
                  <p className="p-3  ">
                    <span className="fs-4 text-white">Marcus Owens</span>
                    <br /> Architects
                  </p>
                  <p className="p-3 text-white team-social ">
                    {" "}
                    Facebook <br /> Linkdin{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <img className="img" src={team4} alt="" />
              <div className="style mt-4">
                <div className="team-title">
                  <p className="p-3 ">
                    {" "}
                    <span className="fs-4 text-white">
                      Marcus Owens
                    </span> <br /> Architects
                  </p>
                  <p className="p-3 text-white style team-social">
                    {" "}
                    Facebook <br /> Linkdin{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
