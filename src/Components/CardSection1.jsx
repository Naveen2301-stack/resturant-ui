import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./CardSection1.css";
import MyImage from "./food3.jpg";

const CardSection1 = () => {
  const Card = ({ img, count, title, description }) => {
    return (
      <div className="each-card">
        <div className="image-containter">
          <img className="image-containter-image" src={img} alt="" />
          <div className="image-containter-count">{count}</div>
        </div>
        <div className="each-card-title">{title}</div>
        <div className="each-card-description">{description}</div>
      </div>
    );
  };

  return (
    <>
      <div>
        <button className="card-section-btn">Categories</button>
      </div>

      <div className="card-section-text-div">
        <h1 className="card-section-text">Favourities</h1>
      </div>

      <section className="cardsection1">
        <Row className="cardsection1-row">
          <Col>
            <Card
              img={MyImage}
              count={55}
              title="Pizza"
              description="Desde $60"
            />
          </Col>
          <Col>
            <Card
              img={MyImage}
              count={55}
              title="Pizza"
              description="Desde $60"
            />
          </Col>
          <Col>
            <Card
              img={MyImage}
              count={55}
              title="Pizza"
              description="Desde $60"
            />
          </Col>
          <Col>
            <Card
              img={MyImage}
              count={55}
              title="Pizza"
              description="Desde $60"
            />
          </Col>
          <Col>
            <Card
              img={MyImage}
              count={55}
              title="Pizza"
              description="Desde $60"
            />
          </Col>
        </Row>
      </section>
    </>
  );
};
export default CardSection1;
