import {Button} from "react-bootstrap";
import React from "react";
import ItemCount from "./ItemCount";

function ItemDetail({name, stock, initial}) {
    return (
        <div>
            <h4>{name}</h4>
            <ItemCount stock={stock} initial={initial}/>
        </div>
    );
}

export default ItemDetail;