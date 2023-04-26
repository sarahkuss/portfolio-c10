import { Col, Container, Row } from "react-bootstrap"
import { Github } from "react-bootstrap-icons"
export default function Footer () {
  const currentYear = new Date ().getFullYear()
  const githubUrl = "https://github.com/sarahkuss/portfolio-c10"
  return(
    <footer>
      <Container>
        <Row>
          <Col className="footer-col">
            <p className="text-center">
            <a href={githubUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="button-effect">
              <Github size={40} color="#171515" /></a>
            <small>&copy; {currentYear}</small>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}