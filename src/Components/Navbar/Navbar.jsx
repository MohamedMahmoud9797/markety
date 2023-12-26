import { Navbar, Badge, Nav, Container } from "react-bootstrap";
import logo from "../../assets/images/creative-market-logo.png";
import { BsFillCartPlusFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

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
            <NavLink className="mx-2" to="/">
              Home
            </NavLink>
            <NavLink className="mx-2" to="Products">
              Products
            </NavLink>
            <NavLink className="mx-2" to="Catogries">
              Catogries
            </NavLink>
            <NavLink className="mx-2" to="Brands">
              Brands
            </NavLink>
          </Nav>
          <Nav className="ms-auto align-items-center">
            <Nav.Link to="#home"></Nav.Link>
            <Nav.Link variant="primary ml-5">
              cart <BsFillCartPlusFill size={37} />
              <Badge bg="success">9</Badge>
            </Nav.Link>
            <Nav.Link to="#link">Login</Nav.Link>
            <Nav.Link to="#link">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
