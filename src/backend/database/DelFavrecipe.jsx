import { db } from "../../backend/database/firebase";
import { collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";

const deleteFromFirestore = async (recipeId, userId) => {
    if (!recipeId || !userId) return;

    try {
        const favRef = collection(db, "Favs");
        const q = query(favRef, where("recipeId", "==", recipeId), where("ownerId", "==", userId));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const docRef = querySnapshot.docs[0].ref; // Get first match
            await deleteDoc(docRef);
        }
    } catch (error) {
        console.error("Error deleting recipe:", error.message);
        throw error;
    }
};

export default deleteFromFirestore;
