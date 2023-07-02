import {collection, getDocs, getFirestore} from 'firebase/firestore';


const getAllItems = async () => {
    const db = getFirestore();
    const itemsCollection = collection(db, 'items');
    const snapshot = await getDocs(itemsCollection);
    return snapshot
        .docs
        .map((doc) => ({id: doc.id, ...doc.data()}));
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