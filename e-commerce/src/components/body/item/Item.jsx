import React from "react";
import ItemCount from "../itemcount/ItemCount";
import './Item.css';

function Item({item}) {
    // Items an object with the following structure:
    // {
    //     id: 1,
    //     title: "Mesa",
    //     price: 1000,
    //     pictureUrl: "https://via.placeholder.com/150",
    //     stock: 5
    // }

    // Todavía no definimos qué va a hacer onAdd
    const onAdd = (count) => {
        console.log("Agregaste " + count + " '" + item.title + "' al carrito");
    }
    return (
        <div className="item-detail">
            <h4>{item.title}</h4>
            <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>
        </div>
    );
}

export default Item;