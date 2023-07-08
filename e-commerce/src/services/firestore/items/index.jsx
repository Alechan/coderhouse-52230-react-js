import {where, query, doc, collection, getDoc, getDocs, getFirestore, FieldPath} from 'firebase/firestore';


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
    if (!snapshot.exists()) {
        return null
    }
    return {id: snapshot.id, ...snapshot.data()}
}

const getItemsByIds = async (ids) => {
    const db = getFirestore();
    const q = query(
        collection(db, "items"),
        where(FieldPath.documentId(), "in", ids)
    );

    const snapshot = await getDocs(q);
    return snapshot
        .docs
        .map((doc) => ({id: doc.id, ...doc.data()}));
};

const updateItems = async (items) => {
    const db = getFirestore();
    const batch = db.batch();
    items.forEach((item) => {
        const itemRef = doc(db, "items", item.id);
        batch.update(itemRef, item);
    });
    await batch.commit();
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

export {getAllItems, getItem, getItemsInCity, getItemsByIds, updateItems};