import styles from "./Team.module.css";

import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import React, { useState, useEffect } from "react";
import ceo from "../../Images/Ceo.jpg";
import abhijit from "../../Images/Abhijit.jpg";
import samir from "../../Images/Samir.jpg";
import panta from "../../Images/panta.jpg";
import ridwan from "../../Images/Ridewan.jpg";
import rakib from "../../Images/rakib.jpg";
import tarek from "../../Images/Tarek.jpg";
import istiak from "../../Images/istiak.jpg";
import atik from "../../Images/atik.jpeg";
import tanvir from "../../Images/tanvir.jpg";
import jobair from "../../Images/jobaier.jpg";
import anwar from "../../Images/anwar.jpg";
import biplop from "../../Images/biplop.jpg";
// import jayed from "../../Images/baset.jpg"
import novel from "../../Images/novel.jpg"
import rashed from "../../Images/rashed.jpg"
import Morshel from "../../Images/morsel.jpg"
import nipa from "../../Images/nipa.jpg"
import rafsan from "../../Images/Rafsan.jpeg"
import zakir from "../../Images/zakir.jpg"
import animesh from "../../Images/animesh.jpg"
import raihan from "../../Images/raihan.jpg"
import zia from "../../Images/zia.jpg"

const Team = () => {
  const all = [
    {
      img: ceo,
      name: "Sohail MoHammed Shakoor ",
      department: "Architects",
    },
    {
      img: abhijit,
      name: "Abhijit Dutta",
      department: "Architects",
    },
    {
      img: rakib,
      name: "Abdur Rakib",
      department: "Architects",
    },
    {
      img: samir,
      name: "Samir Sakir",
      department: "Asst. Architect",
    },
    {
      img: panta,
      name: "pantha Kumar Saha",
      department: "Asst. Architect",
    },
    {
      img: ridwan,
      name: "Ridwan Tanvir",
      department: "Asst. Architect",
    },
    {
      img: tarek,
      name: "Tarekur Rahman",
      department: "Asst. Architect",
    },
    {
      img: atik,
      name: "Atikuzzaman",
      department: "Asst. Architect",
    },
    {
      img: tanvir,
      name: "Tanvirul Hakim",
      department: "Asst. Architect",
    },
    {
      img: istiak,
      name: "Ishtiak Mahmood",
      department: "Architects",
    },
   
  ];

  const arc = [
    {
      img: ceo,
      name: "Sohail Mohammed Shakoor ",
      department: "Architects",
    },
    {
      img: abhijit,
      name: "Abhijit Dutta",
      department: "Architects",
    },
    {
      img: rakib,
      name: "Abdur Rakib",
      department: "Architects",
    },
    {
      img: samir,
      name: "Samir Sakir",
      department: "Architects",
    },
    {
      img: panta,
      name: "Pantha Kumar Saha",
      department: "Architects",
    },
    {
      img: ridwan,
      name: "Ridwan Tanvir",
      department: "Architects",
    },
    {
      img: tarek,
      name: "Tarekur Rahman",
      department: "Architects",
    },
    {
      img: atik,
      name: "Atikuzzaman",
      department: "Architects",
    },
    {
      img: tanvir,
      name: "Tanvirul Hakim",
      department: "Architects",
    },
    {
      img: istiak,
      name: "Ishtiak Mahmood",
      department: "Architects",
    },
  ];
  const admin = [
    {
      img: jobair,
      name: "Jobaer Iqbal",
      department: "Manager (Admin & HR)",
    },
    {
      img: anwar,
      name: "Nurul Anwar(Monna)",
      department: "Asst. Manager (Admin & HR)",
    },
    {
      img: biplop,
      name: "Biplab Mallick",
      department: "Accountant",
    },
    // {
    //   img: jayed,
    //   name: "Marcus Owens",
    //   department: "Architects",
    // },
  ]; 
  const eng = [
    {
      img: nipa,
      name: "Noor Sabina Sikdar",
      department: "Asst. Struct. Engineer",
    },
    {
      img: rafsan,
      name: "K.H.M Rafsan Bin Iqbal",
      department: "Asst. Struct. Engineer",
    },
    // {
    //   img: biplop,
    //   name: "Biplab Mallick",
    //   department: "Accountant",
    // },
    // {
    //   img: jayed,
    //   name: "Marcus Owens",
    //   department: "Architects",
    // },
  ];
  const elec_eng = [
    {
      img: novel,
      name: "M.M Nurul Islam",
      department: "Elec. Engineer",
    },
    {
      img: rashed,
      name: "Rashedul Alam",
      department: "Asst. Elec. Engineer",
    },
    {
      img: Morshel,
      name: "Mohammad Morshel",
      department: "Asst. Elec. Engineer",
    },
    // {
    //   img: team2,
    //   name: "Marcus Owens",
    //   department: "Architects",
    // },
  ];
  const Interior = [
    {
      img: zakir,
      name: " Abu Zakaria",
      department: "In Charge (Interior Dept.)",
    },
    {
      img: animesh,
      name: "Animesh dey",
      department: "Sr. Executive (Interior Dept.)",
    },
    {
      img: raihan,
      name: "Raihanul Islam",
      department: "Sr. Executive (Interior Dept.)",
    },
    {
      img: zia,
      name: "Ziauddin Bablu",
      department: "Site Engineer",
    },
  ];

  const teamData = {
    all: all,
    arc: arc,
    admin:admin,
    elec_eng:elec_eng,
    eng:eng,
    Interior:Interior
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
    <div className={styles.team_back}>
      <div className="container">
        <div className="row" data-aos="fade-up">
          <div className="col-lg-6 portfolio-flters">
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
            <h6
              onClick={() => handleChange("Interior")}
              className={`${selected === "Interior" ? "text-white" : null}`}
            >
              INTERIOR
            </h6>
          </div>
          <div className="col-lg-6">
            <h2 className="text-white">Our Team</h2>
          </div>
        </div>
        <div className="row" data-aos="fade-up" data-aos-delay="100">
            {teamData[selected].map((value, index) => (
              <div key={index} className="col-md-3">
                <img className={styles.img} src={value.img} alt="" />
                <div className="style mt-4">
                  <div className={styles.team_title}>
                    <p className="p-3 ">
                      {" "}
                      <span className="fs-4 text-white ">{value.name}</span>
                      <br /> {value.department}
                    </p>
                    <p className={`p-3 text-white ${styles.team_social}`}>
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
  );
};

export default Team;
