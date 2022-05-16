import { Card,Button,Container,Row } from "react-bootstrap";

const Home = () => {
    return (
        <>
            <Container>
                <Card className=" mt-4">
                    <Card.Body>
                        <Card.Title className="text-center">
                            <h1>Special treatment</h1>
                        </Card.Title>
                        <Card.Text className="text-center mt-4">
                            <h5>
                                With supporting text below as a natural lead-in
                                to Home
                            </h5>
                        </Card.Text>
                        <Button className="buttonGo mb-0 position-absolute bottom-0 start-30 ">
                            Go somewhere
                        </Button>
                    </Card.Body>
                </Card>
                <br />

                <Container fluid>
                    <Row>
                        <Card border="info" style={{ width: "18rem" }}>
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Info Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card border="info" style={{ width: "18rem" }}>
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Info Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card border="info" style={{ width: "18rem" }}>
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Info Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card border="info" style={{ width: "18rem" }}>
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Info Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </Container>
        </>
    );
};
export default Home;
