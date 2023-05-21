import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./cartwidget";

function ShopBrand() {
    return (
        <Navbar.Brand href="#home">
            <Container className="d-flex align-items-center">
                <span role="img" aria-label="popcorn" style={{ marginRight: '10px' }}>🍿</span>
                <Navbar.Collapse id="basic-navbar-nav">
                    PororóShop
                </Navbar.Collapse>
            </Container>
        </Navbar.Brand>
    );
}

function BurgerIcon() {
    return <Navbar.Toggle aria-controls="basic-navbar-nav"/>;
}

function MenuItems() {
    const TuTienda = () => <Nav.Link href="#tu-tienda">Tu tienda</Nav.Link>;
    const Cuidades = () => {
        return (
            <NavDropdown title="Ciudades" id="basic-nav-ciudades">
                <NavDropdown.Item href="#ciudad/parana">Paraná</NavDropdown.Item>
                <NavDropdown.Item href="#ciudad/concordia">Concordia</NavDropdown.Item>
                <NavDropdown.Item href="#ciudad/gualeguaychu">Gualeguaychú</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item href="#ciudad/todo-entre-rios">A todo Entre Ríos</NavDropdown.Item>
            </NavDropdown>
        )
    };
    const Ayuda = () => <Nav.Link href="#ayuda">Ayuda</Nav.Link>;

    return <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Cuidades/>
            <TuTienda/>
            <Ayuda/>
        </Nav>
    </Navbar.Collapse>;
}

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
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
