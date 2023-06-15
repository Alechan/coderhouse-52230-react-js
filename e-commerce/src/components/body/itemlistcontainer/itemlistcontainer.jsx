import {Row, Col, Spinner, Container} from 'react-bootstrap';
import './itemlistcontainer.css';
import ItemList from "../itemlist/ItemList";
import {useEffect, useState} from "react";
import {getItems} from "../../../services";

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getItems()
            .then(items => {
                setItems(items)
                setLoading(false)
            })
            // Ignore errors
            .catch(() => {});
    }, []);

    return (
                <Row className="justify-content-center align-items-center">
                    <Col className="col-greeter">
                        <h1>{greeting}</h1>
                        {loading ?
                            <Container>
                                <h2 className="d-inline">Cargando productos... </h2>
                                <Spinner animation="border" role="status" className="ml-2"/>
                            </Container>
                            : <ItemList items={items}/>
                        }
                    </Col>
                </Row>
    );
};

export default ItemListContainer;