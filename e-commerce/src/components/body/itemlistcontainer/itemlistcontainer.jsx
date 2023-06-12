import {Row, Col} from 'react-bootstrap';
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
            });
    });

    return (
                <Row className="justify-content-center align-items-center">
                    <Col className="col-greeter">
                        <h1>{greeting}</h1>
                        {loading ?
                            <h2>Cargando productos...</h2>
                            : <ItemList items={items}/>
                        }
                    </Col>
                </Row>
    );
};

export default ItemListContainer;