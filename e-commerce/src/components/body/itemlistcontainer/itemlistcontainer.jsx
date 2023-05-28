import {Container, Row, Col} from 'react-bootstrap';
import './itemlistcontainer.css';
import ItemList from "../itemlist/ItemList";

const ItemListContainer = ({greeting}) => {
    const items = [
        {
            id: 1,
            title: "Mesa",
            price: 1000,
            pictureUrl: "https://via.placeholder.com/150",
            stock: 5
        },
        {
            id: 2,
            title: "Cajón de naranjas",
            price: 500,
            pictureUrl: "https://via.placeholder.com/150",
            stock: 2
        },
        {
            id: 3,
            title: "Cajón de mandarinas",
            price: 500,
            pictureUrl: "https://via.placeholder.com/150",
            stock: 8
        }
    ]

    return (
        <div className="background-image-container">
            <Container fluid className="background-image-blur">
                <Row className="justify-content-center align-items-center">
                    <Col className="col-greeter">
                        <h1>{greeting}</h1>
                        <ItemList items={items}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ItemListContainer;