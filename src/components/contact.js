import {Container,Figure } from "react-bootstrap";
import Koffie from "../public/koffie.jpg"
const Contact = () => {
    return (
        <>
            <Container>
                <Figure>
                    <Figure.Image className="imageContact mt-4"
                        width={300}
                        height={150}
                        alt="koffie"
                        src={Koffie}
                    />
                    <Figure.Caption>
                        Contact.
                    </Figure.Caption>
                </Figure>
            </Container>
        </>
    );
};
export default Contact;
