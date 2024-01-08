import { Navbar, Badge, Nav, Container } from "react-bootstrap";
import logo from "../../assets/images/creative-market-logo.png";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbarr = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart.cartItems.length);
  return (
    <Navbar expand="lg" className="bg-main-light">
      <Container>
        <NavLink className="nav-link" to="/">
          <img src={logo} />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="Products">
              Products
            </NavLink>
            <NavLink className="nav-link" to="Catogries">
              Catogries
            </NavLink>
            <NavLink className="nav-link" to="Brands">
              Brands
            </NavLink>
          </Nav>
          <Nav className="ms-auto align-items-center">
            <Nav.Link to="#home"></Nav.Link>
            <Link
              variant="primary ml-5"
              to="cart
            "
              className="nav-link"
            >
              cart <BsFillCartPlusFill size={37} />
              <Badge bg="success">{cart.cartItems.length}</Badge>
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
            {/* <Nav.Link to="#link">Logout</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
