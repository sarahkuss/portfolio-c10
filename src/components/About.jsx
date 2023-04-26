import { Col, Container, Row } from "react-bootstrap";

export default function About () {
  return(
    <section>
      <Container>
        <Row className="bg-danger">
          <Col>
            <img src="https://picsum.photos/300/300" alt= "profile pic"/>
          </Col>
          
          <Col>
            <h1>Hi I'm Sarah</h1>
            <p>I am a software engineer located in South Florida. I love animals, gardening, and surfing.</p>
            <p>Contact me: email@email.com</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}