import {useParams} from "react-router-dom";

const ItemDetailContainer = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Mostrando info del item {id}</h1>
        </div>
    )
}

export default ItemDetailContainer;