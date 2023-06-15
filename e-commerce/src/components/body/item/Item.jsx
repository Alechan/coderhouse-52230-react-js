import {useEffect, useState} from "react";
import './Item.css';
import {Card, Spinner} from "react-bootstrap";

function Item({item}) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [img, setImg] = useState();

    // TODO: no pude hacer andar el spinner con un <img onload>, así que hago el fetch a manopla nomás
    const fetchImage = async (url) => {
        const res = await fetch(url);
        const imageBlob = await res.blob();
        return URL.createObjectURL(imageBlob);
    };

    const handleImageLoad = () => {
        setImageLoaded(true)
    };


    // Fetch the image when the component mounts
    useEffect(() => {
        fetchImage(item.pictureUrl)
            .then(imageFetched => {
                setImg(imageFetched);
                setImageLoaded(true);
            })
            // Ignore errors
            .catch(() => {});
    }, [])

    return (
        <Card className="item">
            <Card.Body>
                {!imageLoaded ?
                    <Spinner animation="border" role="status" className="ml-2"/>
                    : <Card.Img variant="top" src={img} onLoad={handleImageLoad}/>
                }
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.cityName}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Item;