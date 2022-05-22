//Componente de menú de la pagina
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "./CartWidget.jsx";
import { Navbar,Container,Nav } from "react-bootstrap"; 

const Menu = () => {
        return (
        <Navbar bg="primary" variant="dark" className="bg-success" fixed="top" collapseOnSelect expand="lg">
          <Container>
          <Navbar.Brand href="">FRUCHDMAN</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="../index.js">Home</Nav.Link>
            <Nav.Link href="#producto">PRODUCTOS</Nav.Link>
            <Nav.Link href="#services">SERVICIOS</Nav.Link>
            <Nav.Link href="#about">NOSOTROS</Nav.Link>
            <Nav.Link href="#"><CartWidget/></Nav.Link>
          </Nav>
          </Container>
        </Navbar>
        );
    }
    export default Menu;