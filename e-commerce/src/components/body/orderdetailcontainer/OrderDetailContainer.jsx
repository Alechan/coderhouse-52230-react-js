import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getOrder} from "../../../services/firestore/orders";
import {Button, Col, Container, Row, Spinner} from "react-bootstrap";
import OrderDetail from "../orderdetail/OrderDetail";
import {LinkContainer} from "react-router-bootstrap";
import {ROUTES} from "../../../constants";

const OrderDetailContainer = () => {
    const {id} = useParams();
    const [order, setOrder] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            getOrder(id)
                .then(order => {
                    setOrder(order)
                    setLoading(false)
                })
                // Ignore errors
                .catch(() => {
                })
        },
        [id]
    );

    return (
        <>
            <Row className="justify-content-center align-items-center">
                <Col className="col-greeter">
                    {loading ?
                        <Container>
                            <h2 className="d-inline">Cargando orden... </h2>
                            <Spinner animation="border" role="status" className="ml-2"/>
                        </Container>
                        : !!order ?
                            <OrderDetail order={{...order, id: id}}/>
                            :
                            <div>
                                <h1>No encontramos esa orden. ¿La copiaste bien? </h1>
                                <LinkContainer to={ROUTES.HOME} className="d-block">
                                    <Button>Ir a buscar otros productos</Button>
                                </LinkContainer>
                            </div>
                    }
                </Col>
            </Row>
        </>
    )
}

export default OrderDetailContainer;
