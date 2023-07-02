import {doc, collection, getDoc, getDocs, getFirestore} from 'firebase/firestore';


const getAllItems = async () => {
    const db = getFirestore();
    const itemsCollectionRef = collection(db, 'items');
    const snapshot = await getDocs(itemsCollectionRef);
    return snapshot
        .docs
        .map((doc) => ({id: doc.id, ...doc.data()}));
}

const getItem = async (id) => {
    const db = getFirestore();
    const itemRef = doc(db, 'items', id);
    const snapshot = await getDoc(itemRef);
    return {id: snapshot.id, ...snapshot.data()}
}

const getItemsInCity = async (cityId) => {
    // TODO: instead of fetching all items and then filtering in the client, fetch only the items in a given city
    const response = await getAllItems();
    // noinspection EqualityComparisonWithCoercionJS
    return response.filter(item => item.cityId == cityId);
}

export {getAllItems, getItem, getItemsInCity};