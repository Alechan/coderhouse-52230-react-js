import {Cart4} from "react-bootstrap-icons";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from "react-router-bootstrap";
import {CartContext} from "../../context/cart";
import {useContext} from "react";

const NavbarCartWidget = () => {
    const {getTotalItems} = useContext(CartContext);
    return (
        <LinkContainer to="/cart">
            <Nav.Link>
                <Cart4/>
                <span className="span-cart-widget">{getTotalItems()}</span>
            </Nav.Link>
        </LinkContainer>
    )
}

export default NavbarCartWidget;