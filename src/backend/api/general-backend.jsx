import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "504a1f254fd04663ae8e71fabd564ff3";

// ✅ Ensure hook always returns an object
export const useRecipeById = (id) => {
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return; // ✅ Prevent unnecessary API calls if ID is missing

        const fetchRecipe = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
                );
                setRecipe(response.data);
            } catch (err) {
                console.error("Error fetching recipe:", err);
                setError("Failed to fetch recipe.");
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [id]);

    return { recipe, loading, error }; // ✅ Always return an object
};
