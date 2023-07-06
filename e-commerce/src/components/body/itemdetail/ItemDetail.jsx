import React, {useContext, useEffect, useState} from "react";
import ItemCount from "../itemcount/ItemCount";
import './ItemDetail.scss';

import {Button, Card, Modal, Spinner} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {ROUTES} from "../../../constants";
import {CartContext} from "../../../context/cart";

function ItemDetail({item}) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [img, setImg] = useState();
    const [shouldShowModal, setShouldShowModal] = useState(false);
    const {addItemToCart} = useContext(CartContext);

    // TODO: no pude hacer andar el spinner con un <img onload>, así que hago el fetch a manopla nomás
    const fetchImage = async (url) => {
        const res = await fetch(url);
        const imageBlob = await res.blob();
        return URL.createObjectURL(imageBlob);
    };

    // Fetch the image when the component mounts
    useEffect(() => {
            fetchImage(item.pictureUrl)
                .then(imageFetched => {
                    setImg(imageFetched);
                    setImageLoaded(true);
                })
                // Ignore errors
                .catch(() => {
                });
        },
        [item.pictureUrl]
    )

    const onAdd = (count) => {
        addItemToCart(item, count);
        setShouldShowModal(true);
    }
    return (
        <>
            <Card className="item-detail">
                <Card.Body>
                    {!imageLoaded ?
                        <Spinner animation="border" role="status" className="ml-2"/>
                        : <Card.Img variant="top" src={img}/>
                    }
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        {item.cityName}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <span className="align-middle m-1">${item.price}</span>
                    <span className="align-middle m-1">Stock: {item.stock}</span>
                    <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>
                </Card.Footer>
            </Card>
            <Modal className="justify-content-center align-items-center" centered show={shouldShowModal}>
                <Modal.Body>
                    <Modal.Body>
                        <div className="text-center">
                            <p>¡Ítems agregados al carrito!</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <LinkContainer to={ROUTES.HOME} className="modal-home-button">
                                <Button>Seguir comprando</Button>
                            </LinkContainer>
                            <LinkContainer to={ROUTES.CART} className="modal-cart-button">
                                <Button>Ir al carrito</Button>
                            </LinkContainer>
                        </div>
                    </Modal.Body>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ItemDetail;