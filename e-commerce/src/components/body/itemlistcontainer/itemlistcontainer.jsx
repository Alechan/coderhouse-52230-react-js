import {Row, Col, Spinner, Container} from 'react-bootstrap';
import './itemlistcontainer.css';
import ItemList from "../itemlist/ItemList";
import {useEffect, useState} from "react";
import {getAllItems} from "../../../services";
import {useNavigate, useParams} from "react-router-dom";
import {getItemsInCity} from "../../../services/items";

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const [h1, setH1] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if(id) {
            getItemsInCity(id)
                .then(items => {
                    if (items.length === 0) {
                        navigate("/")
                        return
                    }
                    setItems(items)
                    setLoading(false)
                    // TODO: en vez de mostrar el id, mostrar el nombre de la ciudad
                    setH1(<h1> Mostrando productos de la ciudad de {id}</h1>);
                })
                // Ignore errors
                .catch(() => {});
        } else {
            getAllItems()
                .then(items => {
                    setItems(items)
                    setLoading(false)
                })
                // Ignore errors
                .catch(() => {});
            setH1(<h1>{greeting}</h1>);
        }
    }, [id, loading]);

    return (
                <Row className="justify-content-center align-items-center">
                    <Col className="col-greeter">
                        {h1}
                        {loading ?
                            <Container>
                                <h2 className="d-inline">Cargando productos... </h2>
                                <Spinner animation="border" role="status" className="ml-2"/>
                            </Container>
                            : <Container>
                                <h2>Haz click en un producto para ver sus detalles</h2>
                                <ItemList items={items}/>
                            </Container>
                        }
                    </Col>
                </Row>
    );
};

export default ItemListContainer;