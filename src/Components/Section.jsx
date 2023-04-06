import React from 'react'
import MyImage4 from './man.png'
import { Container, Row, Col } from "reactstrap";

const Section = () => {
  return (
    <section>
       <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="card" style={{ width: "18rem" }}>
              <img src={MyImage4} class="card-img-top" alt="man.png" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Section