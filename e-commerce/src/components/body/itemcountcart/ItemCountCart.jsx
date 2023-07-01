import {Trash3} from "react-bootstrap-icons";
import {Button, ButtonGroup} from 'react-bootstrap';
import './ItemCountCart.css';

const ItemCountCart = ({stock, count, onIncrease, onDecrease, onRemove}) => {

    const stockAvailableElement =
        <div>
            <ButtonGroup type="checkbox" className="mb-2">
                <Button size="sm" variant="secondary" onClick={onDecrease}>-</Button>
                <span className="item-count-cart-n">{count}</span>
                <Button size="sm" variant="secondary" onClick={onIncrease}>+</Button>
                <Button size="sm" variant="danger" onClick={() => onRemove()} disabled={count === 0}>
                    <Trash3/>
                </Button>
            </ButtonGroup>
        </div>
    const stockNotAvailableElement = <p>Sin stock</p>;
    return (
        <>

            {
                stock > 0 ?
                    stockAvailableElement
                    : stockNotAvailableElement
            }
        </>
    );
};

export default ItemCountCart;