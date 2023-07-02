import {where, query, doc, collection, getDoc, getDocs, getFirestore} from 'firebase/firestore';


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
    const db = getFirestore();
    const q = query(
        collection(db, "items"),
        where("cityId", "==", cityId)
    );

    const snapshot = await getDocs(q);
    return snapshot
        .docs
        .map((doc) => ({id: doc.id, ...doc.data()}));
}

export {getAllItems, getItem, getItemsInCity};