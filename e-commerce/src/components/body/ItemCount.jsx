import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const increase = () => {
        if (count < stock) {
            // For counters, it's better to use a function to reference the previous value instead of passing the current value
            // https://kentcdodds.com/blog/use-state-lazy-initialization-and-function-updates
            setCount(prevCount => prevCount + 1);
            // No entiendo acá si rompemos con el artículo que pegué arriba, o si es que no se aplica en este caso
            onAdd(count + 1)
        }
    };

    const decrease = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        }
    };

    return (
        <div>
            <div>
                <Button variant="secondary" onClick={decrease}>-</Button>
                <span className="item-count-n" >{count}</span>
                <Button variant="secondary" onClick={increase}>+</Button>
            </div>
        </div>
    );
};

export default ItemCount;