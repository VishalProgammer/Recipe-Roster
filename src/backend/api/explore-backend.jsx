const API_BASE_URL = 'https://api.spoonacular.com';
import { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = '504a1f254fd04663ae8e71fabd564ff3';



// Fetch recipes by Cuisine:
export const getRecipesByCuisine = (prop) =>{
  useEffect(()=>{
    fetchRecipes = async() =>{
      try{
        response = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${prop.cuisine}&sort=random&number=10
`
        )
        return response.data.recipes
      }
      catch(error){
        console.error('Error caught while trying to import Recipes by Cuisine:', error);
        
      }
    }

  },[])
}

  // Fetch Ingredients
  export const getIngredients = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${API_KEY}&query=a&number=20
`);
      return response.data;
    } catch (error) {
      console.error('Error fetching ingredients:', error);
      return [];
    }
  };