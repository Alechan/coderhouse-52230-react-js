import ItemCountCart from "../itemcountcart/ItemCountCart";
import {useEffect, useState} from "react";
import {Spinner} from "react-bootstrap";
import './CartListRow.scss';

const CartListRow = ({item, quantity, onDecrease, onIncrease, onRemove}) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [img, setImg] = useState();

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
    }, [item.pictureUrl])

    return (
        <tr>
            <td className="align-middle">
                <p className="m-2">
                    {item.title}
                </p>
            </td>
            <td className="align-middle">
                {!imageLoaded ?
                    <Spinner animation="border" role="status" className="ml-2"/>
                    : <img className="cart-row-img m-2" src={img} alt={item.title}/>
                }
            </td>
            <td className="align-middle">
                <p className="m-2">
                    {item.cityName}
                </p>
            </td>
            <td>
                <div className="d-flex justify-content-center align-items-center m-2">
                    <p className="m-2">${item.price}</p>
                    <p className="m-2">Stock: {item.stock}</p>
                    <ItemCountCart
                        count={quantity}
                        onDecrease={() => onDecrease(item, quantity)}
                        onIncrease={() => onIncrease(item, quantity)}
                        stock={item.stock}
                        onRemove={() => onRemove(item)}
                    />
                </div>
            </td>
        </tr>
    )
}

export default CartListRow;