const API_BASE_URL = 'https://api.spoonacular.com';
import { useEffect, useState } from "react";
const API_KEY = '504a1f254fd04663ae8e71fabd564ff3';

// Fetch Cuisines
export const getCuisines = async () => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/recipes/cuisine`, 
        {
          params: { apiKey: API_KEY }
        }
      );
      // Spoonacular doesn't have a direct "cuisines" endpoint, but they do support cuisines as part of their recipe search.
      return response.data.cuisines || [];
    } catch (error) {
      console.error('Error fetching cuisines:', error);
      return [];
    }
  };
  
  // Fetch Diets
  export const getDiets = async () => {
    try {
      // Diets are predefined by Spoonacular and not fetched dynamically
      const diets = [
        'Gluten Free',
        'Ketogenic',
        'Vegetarian',
        'Lacto-Vegetarian',
        'Ovo-Vegetarian',
        'Vegan',
        'Pescetarian',
        'Paleo',
        'Primal',
        'Low FODMAP',
        'Whole30',
      ];
      return diets;
    } catch (error) {
      console.error('Error fetching diets:', error);
      return [];
    }
  };
  
  // Fetch Ingredients
  export const getIngredients = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/food/ingredients/autocomplete`,
        {
          params: { apiKey: API_KEY, query: '', number: 100 }, // Adjust 'number' as needed
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching ingredients:', error);
      return [];
    }
  };