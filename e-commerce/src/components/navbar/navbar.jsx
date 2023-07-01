import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap'
import NavbarCartWidget from "./NavbarCartWidget";
import './navbar.scss';
import {useContext, useEffect, useState} from "react";
import {getCities} from "../../services";
import {Spinner} from "react-bootstrap";
import {ROUTES} from "../../constants";
import {CartContext} from "../../context/cart";

function ShopBrand() {
    return (
        <LinkContainer to={ROUTES.HOME}>
            <Navbar.Brand>
                <Container className="d-flex align-items-center">
                    <span className="span-pororo-emoji"> 🍿 </span>
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
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getCities()
            .then(cities => {
                setCities(cities)
                setLoading(false)
            })
            // Ignore errors
            .catch(() => {});
    }, [])

    const CityLink = ({city, path}) => {
        return (
            <LinkContainer to={path}>
                <NavDropdown.Item>{city}</NavDropdown.Item>
            </LinkContainer>
        )
    }
    const Cuidades = () => {
        return (
            <NavDropdown title="Ciudades" id="basic-nav-ciudades">
                {loading ?
                    <NavDropdown.Item>
                        <span style={{ marginRight: '10px' }}>Cargando ciudades ...</span>
                        <Spinner animation="border" role="status" size="sm"/>
                    </NavDropdown.Item>
                    : cities.map((city, index) => (
                        <CityLink key={index} city={city.name} path={ROUTES.CITY_ITEMS_DYNAMIC(city.id)}/>
                        )
                    )
                }
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
    const {getTotalItems} = useContext(CartContext);
    return (
        <Navbar expand="lg">
            <Container>
                <ShopBrand/>
                <BurgerIcon/>
                <MenuItems/>
                <Navbar.Collapse className="justify-content-end">
                    <NavbarCartWidget nItems={getTotalItems()}/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
