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
        "https://github.com/Rajan1397/Portfolio/blob/master/public/ProjectImages/apollo247.png?raw=true",
      project_desc:
        "Apollo247 is a complete healthcare site. It provides all medical facilites such as book an appointment with the doctor, book lab test, order medicines, and reading articles and blogs related to health and fitness",
      deploy_link: "https://apolloclone.netlify.app/",
      repo_link: "https://github.com/Rajan1397/Apollo_clone",
      tech_stack: [<FaHtml5 />, <FaCss3 />, <FaJs />],
    },

    {
      id: 4,
      project_name: "Movie-App",
      image:
        "https://github.com/aadityaneve/Portfolio/blob/master/public/ProjectImages/movie-app.png?raw=true",
      project_desc:
        "A Movie platform that allows users to search and watch trailers of a wide variety of movies. This is a personal project.",
      deploy_link: "https://github.com/Rajan1397/movie_app",
      repo_link: "https://github.com/Rajan1397/movie_app",
      tech_stack: [
        <FaReact />,
        <FaNodeJs />,
        <SiMongodb />,
        <FaJs />,
        <SiHeroku />,
        <FaHtml5 />,
        <FaCss3 />,
      ],
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
