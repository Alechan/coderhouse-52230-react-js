import {Cart4} from "react-bootstrap-icons";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from "react-router-bootstrap";
import {CartContext} from "../../context/cart";
import {useContext} from "react";

const NavbarCartWidget = ({nItems}) => {
    return (
        <>
            {
                nItems > 0 ?
                    <LinkContainer to="/cart">
                        <Nav.Link>
                            <Cart4/>
                            <span className="span-cart-widget">{nItems}</span>
                        </Nav.Link>
                    </LinkContainer>
                    : null
            }
        </>
    )
}

export default NavbarCartWidget;