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
            <p>&copy; {currentYear} &nbsp;
            <a href={githubUrl} target="_blank" rel="noreferrer"><Github /></a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}