import React, {useState} from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);

    const increase = () => {
        if (count < stock) {
            // For counters, it's better to use a function to reference the previous value instead of passing the current value
            // https://kentcdodds.com/blog/use-state-lazy-initialization-and-function-updates
            setCount(prevCount => prevCount + 1);
        }
    };

    const decrease = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        }
    };

    return (
        <div>
            <ButtonGroup type="checkbox" className="mb-2">
                <Button size="sm" variant="secondary" onClick={decrease}>-</Button>
                <span className="item-count-n">{count}</span>
                <Button size="sm" variant="secondary" onClick={increase}>+</Button>
                <Button size="sm" variant="primary" onClick={onAdd} disabled={count === 0} >Agregar al carrito</Button>
            </ButtonGroup>
        </div>
    );
};

export default ItemCount;