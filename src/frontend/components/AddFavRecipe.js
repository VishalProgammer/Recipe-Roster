import { db } from "../../backend/database/firebase";
import { collection, addDoc } from "firebase/firestore";
import { auth } from "../../backend/database/firebase";

const addToFirestore = async (title_data, id_data) => {
    try {
        // Ensure the user is authenticated
        if (!auth.currentUser) {
            throw new Error("User is not authenticated.");
        }

        console.log("Authenticated user UID:", auth.currentUser.uid);

        // Add a document to Firestore
        const docRef = await addDoc(collection(db, 'Favs'), {
            title: title_data,
            id: id_data,
            ownerId: auth.currentUser.uid, // Include the owner's UID
        });

        console.log("Document written with ID: ", docRef.id);
        return docRef.id; // Return the document ID
    } catch (error) {
        console.error("Error adding document: ", error.message, error.code);
        throw error; // Rethrow the error for the caller to handle
    }
};

export default addToFirestore;