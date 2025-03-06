import { useState, useEffect } from "react";
import { collection, getDocs,  query, where } from "firebase/firestore";
import { auth } from "../../backend/database/firebase";
import { db } from "../../backend/database/firebase"; // Ensure you have Firebase initialized
import './FavoriteRecipes.css';

export const FavoriteRecipesList = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            const user = auth.currentUser;
            if (!user) {
                setError("User not authenticated");
                return;
            }

            setLoading(true);
            try {
                const q = query(collection(db, "Favs"), where("ownerId", "==", user.uid));
                const querySnapshot = await getDocs(q);
                const recipeList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setRecipes(recipeList);                
            } catch (err) {
                console.error("Error fetching recipes from Firebase:", err);
                setError("Failed to fetch recipes.");
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    return { recipes, loading, error };
};
