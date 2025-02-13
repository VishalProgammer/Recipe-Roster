import axios from "axios";
import { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_API_KEY;

export const TopRecipes = (props) =>{
    const [recipes, setrecipes] = useState([]);
    

    useEffect(() => {
        const fetchRecipes = async() => {
        try {
            const response = await axios.get(
                `https://api.spoonacular.com/recipes/random?number=3&apiKey=${API_KEY}`
            );
            setrecipes(response.data.recipes);
        }
        catch(error){
            console.error('Error fetching recipes:', error);
            
        }
    }
    fetchRecipes();
    }, []);

    return ( 
        <div>
            {console.log(recipes)}
          <h1>Recipe List</h1>
          {recipes.length > 0 ? (
            <ul>
              {recipes.map((recipe) => (
                <li key={recipe.id}>
                  <strong>{recipe.title}</strong>
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading recipes...</p>
          )}
        </div>
      );
};

export const getTopRecipes = async() => {
    try{
        const response = await axios.get(
            `https://api.spoonacular.com/recipes/random?number=3&apiKey=${API_KEY}`
        );
        return (response.data.recipes);
    }
    catch(error){
        console.error("Error exporting recipes:", error);
        return [];
    }
};

export const getRandomRecipes = async() => {
    try{
        const response = await axios.get(
            `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
        );
        return (response.data.recipes);
    }
    catch(error){
        console.error("Error exporting recipes:", error);
        return [];
    }
};