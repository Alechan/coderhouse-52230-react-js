const getAllItems = async () => {
    const response = await fetch('http://localhost:3001/items');
    const items = await response.json();

    // Pre-pend the mockserver url to each image
    items.forEach(item => {
        item.pictureUrl = `http://localhost:3001${item.pictureUrl}`;
    })
    return items;
}

const getItem = async (id) => {
    // TODO: instead of fetching all items and then filtering in the client, fetch only the item with the given id
    const response = await getAllItems();
    // noinspection EqualityComparisonWithCoercionJS
    return response.find(item => item.id == id);
}
const getItemsInCity = async (cityId) => {
    // TODO: instead of fetching all items and then filtering in the client, fetch only the items in a given city
    const response = await getAllItems();
    // noinspection EqualityComparisonWithCoercionJS
    return response.filter(item => item.cityId == cityId);
}

export {getAllItems, getItem, getItemsInCity};