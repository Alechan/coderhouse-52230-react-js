import {addDoc, collection, getFirestore} from 'firebase/firestore';
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


    // // Get items ids to update stock
    // const itemsIds = order.items.map((item) => item.id);
    // const itemsToUpdate = getItemsByIds(itemsIds)
    //
    // // Updated items
    // const updatedItems = itemsToUpdate.docs.map((item) => {
    //     const itemCartQuantity = order.items.find((i) => i.id === item.id).quantity;
    //     return {...item, stock: item.stock - itemCartQuantity}
    // })
    //
    // // Update items stock in batch
    // await updateItems(updatedItems)
    return orderId
}

export default saveOrder;