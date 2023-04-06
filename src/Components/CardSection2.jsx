import React from "react";
import { Container, Row, Col } from "reactstrap";
import './CardSection2.css'

import "./CardSection1.css";
import RectangleImage from "./Rectangle.jpg";
import RectangleImage2 from "./Rectangle2.png";
import RectangleImage3 from "./Rectangle3.png";

const CardSection2 = () => {
  const Card = ({ img,title,description,time }) => {
    return (
      <div className="each-menu-card">
        <div className="image-containter-1">
          <img className="image-containter-image-2" src={img} alt="" />
          <div className="each-card-title-section-2">{title}</div>
          <div className="each-card-description-section-2">{description}</div>
          <div className="each-card-time-section-2">{time}</div>
        </div>
      </div>
    );
  };

  return (
      <section className="cardsection2">
        <Row className="cardsection2-row">
          <Col>
            <Card
              img={RectangleImage}
              title="Rosa Cafe"
              time="20-30 min"
              description="Fonditas"
            />
          </Col>
          <Col>
            <Card
              img={RectangleImage2}
              title="Rosa Cafe"
              time="20-30 min"
              description="Fonditas"
            />
          </Col>
          <Col>
            <Card
              img={RectangleImage3}
              title="Rosa Cafe"
              time="20-30 min"
              description="Fonditas"
            />
          </Col>
          <Col>
            <Card
              img={RectangleImage}
              title="Rosa Cafe"
              time="20-30 min"
              description="Fonditas"
            />
          </Col>
        </Row>
      </section>
  );
};
export default CardSection2;