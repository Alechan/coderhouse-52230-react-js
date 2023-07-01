import {Cart4} from "react-bootstrap-icons";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from "react-router-bootstrap";

const NavbarCartWidget = ({nItems}) => {
    return (
        <>
            {
                nItems > 0 ?
                    <LinkContainer to="/cart">
                        <Nav.Link>
                            <Cart4 color="white"/>
                            <span className="span-cart-widget">{nItems}</span>
                        </Nav.Link>
                    </LinkContainer>
                    : null
            }
        </>
    )
}

export default NavbarCartWidget;