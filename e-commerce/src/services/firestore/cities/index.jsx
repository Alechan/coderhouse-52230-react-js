import {collection, doc, getDoc, getDocs, getFirestore} from "firebase/firestore";

const getCities = async () => {
    const db = getFirestore();
    const citiesCollectionRef = collection(db, 'cities');
    const snapshot = await getDocs(citiesCollectionRef);
    return snapshot
        .docs
        .map((doc) => ({id: doc.id, ...doc.data()}));
}

const getCity = async (id) => {
    const db = getFirestore();
    const itemRef = doc(db, 'cities', id);
    const snapshot = await getDoc(itemRef);
    return {id: snapshot.id, ...snapshot.data()}
}

export {getCities, getCity};
