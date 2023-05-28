import Item from "../item/Item";

const ItemList = ({items}) => {

    return (
        <div className="item-list">
            {items.map((item) => (
                <Item item={item}/>
            ))}
        </div>
    );
}

export default ItemList