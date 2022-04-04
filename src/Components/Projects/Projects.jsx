import React from "react";
import { FaGithub, FaLink, FaNodeJs } from "react-icons/fa";
import {
  ProjectDiv,
  Row,
  ServiceBox,
  ServiceBoxHeader,
  ServiceBoxP,
  A,
  BoxDiv,
} from "./Styles";
import { Container, Common, H1 } from "../../SharedStyles/SharedStyles";
import { AiFillGithub } from "react-icons/ai";
import { FaHtml5, FaReact, FaJs, FaCss3 } from "react-icons/fa";
import { SiMongodb, SiNodeDotJs, SiRedux, SiHeroku } from "react-icons/si";
// import { SiExpress, SiMaterialui } from 'react-icons/si/SiExpress';

import { v4 as uuidv4 } from "uuid";

const Projects = () => {
  const projects = [
    {
      id: 1,
      project_name: "Apollo247 Clone",
      image:
        "https://github.com/UtkarshVaibhav/Travelix-clone/raw/main/images/index.PNG",
      project_desc:
        "Compare airline flight tickets flying to your favorite destinations around the world. Book the cheapest flight.now and enjoy great airfare deals. Home, Flights, Hotels, Car Rental, Taxi, Tour, Cruises, shop, Blog, Discover The World For Less. Save up to 60% on hotels and flights worldwide. For Offline Best Available Fare Whats App Below Scan. CLICK HERE Popular Destinations Need travel inspiration? Check out our most popular destinations. Chennai. Mumbai. Delhi. Hyderabad. Dubai. Sharjah. Abu Dhabi.",
      deploy_link: "",
      repo_link: "https://github.com/UtkarshVaibhav/Travelix-Clone",
      tech_stack: [<FaHtml5 />, <FaCss3 />, <FaJs />],
    },
  ];

  return (
    <Container className="projects">
      <ProjectDiv>
        <Common>
          <H1>Projects</H1>
        </Common>
        <Row>
          {projects.map((item) => (
            <BoxDiv key={uuidv4()}>
              <ServiceBox>
                <img src={item.image} alt="icon" style={{ width: "100%" }} />
                <div style={{ margin: "25px" }}>
                  <ServiceBoxHeader style={{ textAlign: "center" }}>
                    {item.project_name}
                  </ServiceBoxHeader>
                  <ServiceBoxP>{item.project_desc}</ServiceBoxP>
                  {/* <a href="">Read more</a> */}
                  <div
                    style={{
                      margin: "20px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {item.tech_stack.map((item) => (
                      <div key={uuidv4()} className="iconsTechStack">
                        {item}
                      </div>
                    ))}
                  </div>
                  <A
                    href={item.repo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Code
                  </A>
                  <A
                    href={item.deploy_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLink /> Demo
                  </A>
                </div>
              </ServiceBox>
            </BoxDiv>
          ))}
        </Row>
      </ProjectDiv>
    </Container>
  );
};

export default Projects;
