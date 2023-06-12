import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'
import CartWidget from "./cartwidget";
import './navbar.css';

function ShopBrand() {
    return (
        <LinkContainer to="/">
            <Navbar.Brand>
                <Container className="d-flex align-items-center">
                    <span className="span-pororo-emoji" > 🍿 </span>
                    <Navbar.Collapse id="basic-navbar-nav">
                        PororóShop
                    </Navbar.Collapse>
                </Container>
            </Navbar.Brand>
        </LinkContainer>

    );
}

function BurgerIcon() {
    return <Navbar.Toggle aria-controls="basic-navbar-nav"/>;
}

function MenuItems() {
    const CityLink = ({city, path}) => {
        return (
            <LinkContainer to={path}>
                <NavDropdown.Item >{city}</NavDropdown.Item>
            </LinkContainer>
        )
    }
    const Cuidades = () => {
        return (
            <NavDropdown title="Ciudades" id="basic-nav-ciudades">
                <CityLink city="Paraná" path="/city/parana"/>
                <CityLink city="Concordia" path="/city/concordia"/>
                <CityLink city="Gualeguaychú" path="/city/gualeguaychu"/>
                <NavDropdown.Divider/>
                <CityLink city="A todo Entre Ríos" path="/city/a-todo-entre-rios"/>
            </NavDropdown>
        )
    };

    return <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Cuidades/>
        </Nav>
    </Navbar.Collapse>;
}

function NavBar() {
    return (
        <Navbar expand="lg" >
            <Container>
                <ShopBrand/>
                <BurgerIcon/>
                <MenuItems/>
                <Navbar.Collapse className="justify-content-end">
                    <CartWidget/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
