import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohamed Fazil </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            Enthusiastic and driven B.Tech IT student with a passion for web development and App development.
            <br />
            My journey in technology began with a curiosity for creating digital experiences.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Loves to Sleep
            </li>
            <li className="about-activity">
              <ImPointRight /> Praying
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Being alone is better than being with a person who makes you feel alone"{" "}
          </p>
          <footer className="blockquote-footer"> 
            Thoughts</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
