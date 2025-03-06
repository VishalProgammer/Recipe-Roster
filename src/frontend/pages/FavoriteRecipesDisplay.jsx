import React from "react";
import { useState } from 'react';
import { FavoriteRecipesList } from "./FavoriteRecipes"; // Adjust the path
import './FavoriteRecipes.css';
import IdComponent from '../components/SingleRecipe';

const FavRecipeDisplay = () => {
    const { recipes, loading, error } = FavoriteRecipesList(); // Call the function
    const [selectedId, setSelectedId] = useState('');
    const [idPageVisible, setIdPageVisible] = useState(false);

    if (loading) return <p>Loading recipes...</p>;
    if (error) return <p>{error}</p>;
    console.log(recipes);
    
    if(idPageVisible){
        return(<>
        <IdComponent selectedId={selectedId}/>
        
        </>)
    }
    else return (
        <div>
            <h2>Favorite Recipes</h2>
            <ul id="favlist">
            {recipes.length > 0 ? (
                    recipes.map(recipe => (
                        <li key={recipe.id} 
                        onClick={() =>{
                            setIdPageVisible(true);
                            setSelectedId(recipe.id);
                        } }>{recipe.title}</li>
                    ))
                ) : (
                    <p>No favorite recipes found.</p>
                )}
            </ul>
        </div>
    );
};

export default FavRecipeDisplay;
