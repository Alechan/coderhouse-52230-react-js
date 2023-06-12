import {Row, Col} from 'react-bootstrap';
import './itemlistcontainer.css';
import ItemList from "../itemlist/ItemList";

const ItemListContainer = ({greeting}) => {
    // TODO: usar un mock con 2s de delay en vez de hardcodearlo acá
    const items = [
        {
            id: 1,
            title: "Mesa",
            price: 1000,
            pictureUrl: "https://via.placeholder.com/150",
            cityId: "parana",
            cityName: "Paraná",
            stock: 5
        },
        {
            id: 2,
            title: "Naranjas",
            price: 500,
            pictureUrl: "https://via.placeholder.com/150",
            cityId: "parana",
            cityName: "Paraná",
            stock: 2
        },
        {
            id: 3,
            title: "Mandarinas",
            price: 550,
            pictureUrl: "https://via.placeholder.com/150",
            cityId: "concordia",
            cityName: "Concordia",
            stock: 8
        },
        {
            id: 4,
            title: "Bananas",
            price: 600,
            pictureUrl: "https://via.placeholder.com/150",
            cityId: "concordia",
            cityName: "Concordia",
            stock: 10
        },
        {
            id: 5,
            title: "Bananas",
            price: 600,
            pictureUrl: "https://via.placeholder.com/150",
            cityId: "concordia",
            cityName: "Concordia",
            stock: 10
        },
        {
            id: 6,
            title: "Bananas",
            price: 600,
            pictureUrl: "https://via.placeholder.com/150",
            cityId: "a-todo-entre-rios",
            cityName: "A todo Entre Ríos",
            stock: 10
        },
        {
            id: 7,
            title: "Bananas",
            price: 600,
            pictureUrl: "https://via.placeholder.com/150",
            cityId: "gualeguaychu",
            cityName: "Gualeguaychú",
            stock: 10
        },
        {
            id: 8,
            title: "Bananas",
            price: 600,
            pictureUrl: "https://via.placeholder.com/150",
            cityId: "concordia",
            cityName: "Concordia",
            stock: 10
        }
    ]

    return (
                <Row className="justify-content-center align-items-center">
                    <Col className="col-greeter">
                        <h1>{greeting}</h1>
                        <ItemList items={items}/>
                    </Col>
                </Row>
    );
};

export default ItemListContainer;