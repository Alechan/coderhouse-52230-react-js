import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getItem} from "../../../services/firestore";
import ItemDetail from "../itemdetail/ItemDetail";
import {Button, Col, Container, Row, Spinner} from "react-bootstrap";
import {ROUTES} from "../../../constants";
import {LinkContainer} from "react-router-bootstrap";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            getItem(id)
                .then(item => {
                    setItem(item)
                    setLoading(false)
                })
                // Ignore errors
                .catch(() => {
                });
        },
        [id]
    );

    return (
        <>
            <Row className="justify-content-center align-items-center">
                <Col className="col-greeter">
                    {loading ?
                        <Container>
                            <h2 className="d-inline">Cargando producto... </h2>
                            <Spinner animation="border" role="status" className="ml-2"/>
                        </Container>
                        : !!item ?
                            <ItemDetail item={item}/>
                            :
                            <div>
                                <h1>No encontramos ese producto :(</h1>
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

export default ItemDetailContainer;