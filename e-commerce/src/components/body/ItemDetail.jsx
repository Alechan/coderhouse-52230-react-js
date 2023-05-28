import React from "react";
import ItemCount from "./ItemCount";
import './ItemDetail.css';

function ItemDetail({name, stock, initial}) {
    return (
        <div className="item-detail">
            <h4>{name}</h4>
            <ItemCount stock={stock} initial={initial}/>
        </div>
    );
}

export default ItemDetail;