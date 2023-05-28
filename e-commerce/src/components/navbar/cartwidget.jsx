import {Cart4} from "react-bootstrap-icons";
import Nav from "react-bootstrap/Nav";

const CartWidget = () => {
    return (
        <Nav.Link href="#carrito">
            <Cart4 />
            (1)
        </Nav.Link>
    )
}

export default CartWidget;