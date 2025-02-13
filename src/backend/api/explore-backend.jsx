const API_BASE_URL = 'https://api.spoonacular.com';
import { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;


// Fetch recipes by Cuisine:
export const getRecipesByCuisine = (cuisine) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${cuisine}&sort=random&number=10`
        );
        setRecipes(response.data.results); // Spoonacular returns recipes in `results`
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, [cuisine]); // Ensure it refetches when cuisine changes

  return recipes; // Return recipes to be used by the component
};

// Fetch recipes by Diet:
export const getRecipesByDiet = (diet) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/recipes/complexSearch?apiKey=${API_KEY}&diet=${diet}&sort=random&number=10`
        );
        setRecipes(response.data.results); // Spoonacular returns recipes in `results`
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, [diet]); // Ensure it refetches when diet changes

  return recipes; // Return recipes to be used by the component
};

// Fetch recipes by Ingredient:
export const getRecipesByIngredient = (ingredient) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredient}&number=10`
        );
        setRecipes(response.data); // Spoonacular returns recipes in `results`
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, [ingredient]); // Ensure it refetches when ingredient changes

  return recipes; // Return recipes to be used by the component
};