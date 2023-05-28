import React from "react";
import ItemCount from "./ItemCount";
import './Item.css';

function Item({name, stock, initial}) {
    // Todavía no definimos qué va a hacer onAdd
    const onAdd = (count) => {
        console.log("Agregaste " + count + " '" + name + "' al carrito");
    }
    return (
        <div className="item-detail">
            <h4>{name}</h4>
            <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>
        </div>
    );
}

export default Item;