import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sigupimg from "../../Assets/Projects/signupimg.jpeg";
import guiimg from "../../Assets/Projects/guiimg.jpeg";
import watchimg from "../../Assets/Projects/watchimg.jpeg";
import apiimg from "../../Assets/Projects/apiimg.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={watchimg}
              isBlog={false}
              title="Watch Shop FrontEnd"
              description="WATCH SHOP is an online store dedicated to providing high-quality watches to customers worldwide. This frontend repository holds the code responsible for the user interface and client-side functionalities of our web application."
              ghLink="https://github.com/fazilsourcecode/WATCH-SHOP-FRONTEND"
              demoLink="https://watch-frontend-60029619897.development.catalystserverless.in/app/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apiimg}
              isBlog={false}
              title="Weather API"
              description="This Java application fetches weather data using the Open Meteo API. It allows users to input a city name and retrieves the current weather conditions for that city. The application provides functionalities to display the current temperature, relative humidity, and wind speed."
              ghLink="https://github.com/fazilsourcecode/weather_API"
             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sigupimg}
              isBlog={false}
              title="Sign-Up Demo"
              description="This is a simple web application that provides login and registration functionality, as well as a student admission page. It allows users to sign in, register for an account, and complete an admission form."
              ghLink="https://github.com/fazilsourcecode/signup-demo"
              demoLink="https://signup-demo-60029619897.development.catalystserverless.in/app/index.html"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={guiimg}
              isBlog={false}
              title="Weather GUI"
              description="The Weather App is a simple Java Swing application that allows users to check the weather for a specific location."
              ghLink="https://github.com/fazilsourcecode/Weather_GUI"
                         
            />
          </Col>

          
          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
