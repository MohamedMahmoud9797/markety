import { Navbar, Badge, Nav, Container } from "react-bootstrap";
import logo from "../../assets/images/creative-market-logo.png";
import { BsFillCartPlusFill } from "react-icons/bs";

const Navbarr = () => {
  return (
    <Navbar expand="lg" className="bg-main-light">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
            <Nav.Link href="#link">Catogries</Nav.Link>
            <Nav.Link href="#link">Brands</Nav.Link>
          </Nav>
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link variant="primary ml-5">
              cart <BsFillCartPlusFill size={37} />
              <Badge bg="success">9</Badge>
            </Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
            <Nav.Link href="#link">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
