import app from "./app.js"
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'


export async function subscribeToHellfireClub(subscription) {
    const db = getFirestore(app)
    const helfireClubCollection = collection(db, 'helfire-club')
    const docRef = await addDoc(helfireClubCollection, subscription)
    return docRef.id
}

export async function getHellfireClubSubscriptions(){
    const db = getFirestore(app)
    const helfireClubCollection = collection(db, 'helfire-club')
    const helfireClubCollectionSnapshot = await getDocs(helfireClubCollection);
    const subscriptions = helfireClubCollectionSnapshot.docs.map(doc => doc.data());
    return subscriptions;
}


