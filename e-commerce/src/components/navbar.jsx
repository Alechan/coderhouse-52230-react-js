import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Cart4} from 'react-bootstrap-icons';

function ShopBrand() {
    return (
        <Navbar.Brand href="#home">
            PororóShop
        </Navbar.Brand>
    );
}

function BurgerIcon() {
    return <Navbar.Toggle aria-controls="basic-navbar-nav"/>;
}

function MenuItems() {
    const TuTienda = () => <Nav.Link href="#tu-tienda">Tu tienda</Nav.Link>;
    const Categorias = () => {
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
            <Categorias/>
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
                    <Nav.Link href="#carrito">
                        <Cart4 />
                        (1)
                    </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
