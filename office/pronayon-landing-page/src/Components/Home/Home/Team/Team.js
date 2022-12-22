import "./Team.css";

import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import React, { useState, useEffect } from "react";
import team1 from "../../../../Images/Team1.png";
import team2 from "../../../../Images/Team2.png";
import team3 from "../../../../Images/Team3.png";
import team4 from "../../../../Images/Team4.png";

const Team = () => {
  const all = [
    {
      img: team1,
      name: "Marcus Owens",
      department: "Admin",
    },
    {
      img: team2,
      name: "Marcus Owens",
      department: "Interior",
    },
    {
      img: team3,
      name: "Marcus Owens",
      department: "Electrical",
    },
    {
      img: team4,
      name: "Marcus Owens",
      department: "Architects",
    },
  ];

  const arc = [
    {
      img: team3,
      name: "Marcus Owens",
      department: "Architects",
    },
    {
      img: team4,
      name: "Marcus Owens",
      department: "Architects",
    },
    {
      img: team1,
      name: "Marcus Owens",
      department: "Architects",
    },
    {
      img: team2,
      name: "Marcus Owens",
      department: "Architects",
    },
  ];

  const teamData = {
    all: all,
    arc: arc,
  };

  const [selected, setSelected] = useState("all");

  useEffect(() => {
    window.addEventListener("load", () => {});
  }, []);

  const handleChange = (team) => {
    if (selected !== team) setSelected(team);
    // alert(team);
  };

  return (
    <div className="team-back">
      <div className="container">
        <div className="row" data-aos="fade-up">
          <div className="col-lg-6 pt-4 portfolio-flters">
            <h6
              onClick={() => handleChange("all")}
              className={`${selected === "all" ? "text-white" : null}`}
            >
              ALL
            </h6>
            <h6
              onClick={() => handleChange("arc")}
              className={`${selected === "arc" ? "text-white" : null}`}
            >
              ARCHITECTS
            </h6>
            <h6
              onClick={() => handleChange("admin")}
              className={`${selected === "admin" ? "text-white" : null}`}
            >
              ADMINISTRATION
            </h6>
            <h6
              onClick={() => handleChange("eng")}
              className={`${selected === "eng" ? "text-white" : null}`}
            >
              ENGINEERS
            </h6>
            <h6
              onClick={() => handleChange("elec_eng")}
              className={`${selected === "elec_eng" ? "text-white" : null}`}
            >
              ELECTRICAL ENGINEERS
            </h6>
          </div>
          <div className="col-lg-6">
            <h3 className="p-3 text-white text-right">Our Team</h3>
          </div>

          <div className="row  p-3" data-aos="fade-up" data-aos-delay="100">
            {teamData[selected].map((value, index) => (
              <div key={index} className="col-md-3">
                <img className="img" src={value.img} alt="" />
                <div className="style mt-4">
                  <div className="team-title">
                    <p className="p-3 ">
                      {" "}
                      <span className="fs-4 text-white ">{value.name}</span>
                      <br /> {value.department}
                    </p>
                    <p className="p-3 text-white team-social ">
                      {" "}
                      Facebook <br /> Linkdin{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
