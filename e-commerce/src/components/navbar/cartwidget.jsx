import {Cart4} from "react-bootstrap-icons";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from "react-router-bootstrap";

const CartWidget = () => {
    return (
        <LinkContainer to="/cart">
            <Nav.Link>
                <Cart4/>
                (1)
            </Nav.Link>
        </LinkContainer>
    )
}

export default CartWidget;