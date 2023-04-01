import React from "react";
import { Container, Row, Col } from "reactstrap";
// import heroImg from "../../assests/images/hero-img1.png";
import "./HeroSection.css";
import MyImage from "./food3.jpg";
import MyImage2 from "./food1.png"
import MyImage3 from "./Bitmap.jpg"

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                De tu founda favorita <br />
              </h2>
            </div>
            <div className="hero__content-2">
              <p className="mb-5">
                La comodia <br />
                ya conces <br />
                al major
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="card" style={{ width: "18rem" }}>
              <img src={MyImage} class="card-img-top" alt="coffeimg" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="card2" style={{ width: "18rem" }}>
              <img src={MyImage2} class="card-img-top" alt="coffeimg2" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="card3" style={{ width: "18rem" }}>
              <img src={MyImage3} class="card-img-top" alt="coffeimg2" />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
