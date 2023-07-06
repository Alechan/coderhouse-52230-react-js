import {Cart4} from "react-bootstrap-icons";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from "react-router-bootstrap";
import {useState} from "react";
import {ROUTES} from "../../constants";

const NavbarCartWidget = ({nItems}) => {
    const [cartColor, setCartColor] = useState("white");

    return (
        <>
            {
                nItems > 0 ?
                    <LinkContainer to={ROUTES.CART}>
                        <Nav.Link
                            onMouseEnter={() => setCartColor("lightgreen")}
                            onMouseLeave={() => setCartColor("white")}
                        >
                            <Cart4 color={cartColor}/>
                            <span style={{color: cartColor}}>{nItems}</span>
                        </Nav.Link>
                    </LinkContainer>
                    : null
            }
        </>
    )
}

export default NavbarCartWidget;