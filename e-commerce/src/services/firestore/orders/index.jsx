import {addDoc, collection, doc, getDoc, getFirestore} from 'firebase/firestore';
import {getItemsByIds, updateItems} from "../items";

const saveOrder = async (order) => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    let orderId;

    try {
        const docRef = await addDoc(ordersCollection, order);
        orderId = docRef.id;
    } catch (error) {
        console.error("Error saving order:", error);
    }


    // Get items ids to update stock
    const itemsIds = order.items.map((item) => item.id);
    const itemsToUpdate = await getItemsByIds(itemsIds)

    // Updated items
    const updatedItems = itemsToUpdate.map((item) => {
        const itemCartQuantity = order.items.find((i) => i.id === item.id).quantity;
        return {...item, stock: item.stock - itemCartQuantity}
    })

    // Update items stock in batch
    await updateItems(updatedItems)
    return orderId
}

const getOrder = async (id) => {
    const db = getFirestore();
    const itemRef = doc(db, 'orders', id);
    const snapshot = await getDoc(itemRef);
    if (!snapshot.exists()) {
        return null
    }
    return {id: snapshot.id, ...snapshot.data()}
}

export {saveOrder, getOrder};
