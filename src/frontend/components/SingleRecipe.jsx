import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './RecipeComponent.css';
import { useState, useEffect } from 'react';

import { useRecipeById } from '../../backend/api/general-backend';
import { auth, db } from '../../backend/database/firebase';
import { FavoriteRecipesList } from '../pages/FavoriteRecipes';
import addToFirestore from './AddFavRecipe';
import deleteFromFirestore from '../../backend/database/DelFavrecipe'; // Import delete function

const IdComponent = ({ selectedId }) => {
    const recipeData = useRecipeById(selectedId);
    const [isFavorite, setIsFavorite] = useState(false);
    const user = auth.currentUser;
    const { favrecipes, favloading, faverror } = FavoriteRecipesList(); 

    useEffect(() => {
        if (favloading || faverror) return; 
    
        if (favrecipes) {
            const isFav = favrecipes.some(recipe => recipe.id === selectedId);
            setIsFavorite(isFav);
            console.log('HERE IS FAVORITE STORE DATA:',favrecipes)
        }
    }, [favrecipes, favloading, faverror, selectedId]);

    console.log(isFavorite);


    if (!recipeData) return <h2>Loading...</h2>;

    const { recipe, loading, error } = recipeData;
    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error: {error}</h2>;
    if (!recipe) return <h2>No recipe found.</h2>;

    // Save to Firestore
    const handleSave = async () => {
        if (!user) {
            alert("You must be logged in to save recipes.");
            return;
        }
        if (!recipe.title || !selectedId) {
            alert("Invalid data");
            return;
        }
        try {
            await addToFirestore(recipe.title, selectedId);
            alert("Recipe added to Firestore!");
            setIsFavorite(true); // Update UI
        } catch (error) {
            console.error("Error adding recipe:", error.message);
            alert("Failed to add recipe.");
        }
    };

    // Delete from Firestore
    const handleDelete = async () => {
        if (!user) return;
        try {
            await deleteFromFirestore(selectedId, user.uid);
            alert("Recipe removed from favorites!");
            setIsFavorite(false); // Update UI
        } catch (error) {
            console.error("Error removing recipe:", error.message);
            alert("Failed to remove recipe.");
        }
    };


    

    return (
        <div className='body-r'>
            <h1 id='title-r'>{recipe.title}'s Recipe</h1>
            <br />
            <div className='img-r'>
                <img src={recipe.image} alt={recipe.title} width="50%" />
            </div>
            <br />

            {recipe.diets && recipe.diets.length > 0 && (
                <>
                    <h2>Diets:</h2>
                    <ul>
                        {recipe.diets.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </>
            )}

            {recipe.extendedIngredients && recipe.extendedIngredients.length > 0 && (
                <>
                    <h2>Ingredients:</h2>
                    <ul>
                        {recipe.extendedIngredients.map((item, index) => (
                            <li key={index}>
                                {item.name} - {item.amount} {item.unit}
                            </li>
                        ))}
                    </ul>
                </>
            )}

            <br />
            <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
            <br />

            

            {isFavorite ? (
                <button className="btn btn-danger" onClick={handleDelete}>Remove from Fav</button>
            ) : (
                <button className="btn btn-primary" onClick={handleSave}>Add to Fav</button>
            )}
        </div>
    );
};

export default IdComponent;
