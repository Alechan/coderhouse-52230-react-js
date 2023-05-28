import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const increase = () => {
        if (count < stock) {
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
            <div>
                <Button variant="secondary" onClick={decrease}>-</Button>
                <span style={{ margin: '0 10px' }}>{count}</span>
                <Button variant="secondary" onClick={increase}>+</Button>
            </div>
        </div>
    );
};

export default ItemCount;