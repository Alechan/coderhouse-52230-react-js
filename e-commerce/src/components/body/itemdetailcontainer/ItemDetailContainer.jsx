import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getItem} from "../../../services";
import ItemDetail from "../itemdetail/ItemDetail";
import {Col, Container, Row, Spinner} from "react-bootstrap";

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
        []
    );

    return (
        <Row className="justify-content-center align-items-center">
            <Col className="col-greeter">
                {loading ?
                    <Container>
                        <h2 className="d-inline">Cargando producto... </h2>
                        <Spinner animation="border" role="status" className="ml-2"/>
                    </Container>
                    : <ItemDetail item={item}/>
                }
            </Col>
        </Row>
    )
}

export default ItemDetailContainer;