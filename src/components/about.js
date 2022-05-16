import {  Container,Row,Col,Card} from "react-bootstrap";

const About = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <h5>card body about.</h5>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default About;
