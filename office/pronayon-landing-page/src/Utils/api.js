const services = {
    Architecture: [
        "Architectural Design",
        "Architectural Drawing",
        "Construciton Drawing and Specifications",
        "Cordination of Consultant Service",
        "Design Development",
        "Feasibility Studies",
        "3D Perspective View & Modeling",
        "Landscape Design",
        "Sustainable Architecture",
        "Govt.Authority Approval Drawing",
    ],
    Engineering: [
        "Site Servey",
        "Sub-Soil Investigaion & Analysis",
        "Seismic Analysis",
        "Structural Design & Drawings",
        "Electrical Systems Design",
        "Water & Sanitary System",
        "Fire Protection And Life Safety",
        "Electro-Mechanical And Plumbing Engineering",
        "Project Management",
    ],
    "Interior Design": [
        "Interior Design Of boutiques",
        "Interior Design Of Bars and Renders",
        "Architecture Design of house"
    ],
    "Post Construction Services": [
        "Planing",
        "Architecture",
        "Engineering"
    ],
    "Management Consultancy": [
        "Interior Design",
        "Program Manager",
        "Post Construction Service"
    ]
}

const staticData = {
    services
}

export const getAll = (dataKey) => {
    return staticData[dataKey]
}