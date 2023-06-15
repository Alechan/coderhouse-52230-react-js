const getItems = async () => {
    const response = await fetch('http://localhost:3001/items');
    const items = await response.json();

    // Pre-pend the mockserver url to each image
    return items.map(item => {
        return {
            ...item,
            pictureUrl: `http://localhost:3001${item.pictureUrl}`
        };
    });
}

const getItem = async (id) => {
    // TODO: instead of fetching all items and then filtering in the client, fetch only the item with the given id
    const response = await getItems();
    return response.find(item => item.id === id);
}

export {getItems, getItem};