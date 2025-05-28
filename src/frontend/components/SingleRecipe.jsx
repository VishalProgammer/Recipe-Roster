import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './RecipeComponent.css';

import { useRecipeById } from '../../backend/api/general-backend';
import { collection, query, where, getDocs } from "firebase/firestore";

const IdComponent = ({ selectedId }) => {
    const recipeData = useRecipeById(selectedId);

    const checkIfIdExists = () => {
        try {
            const q = query(collection(db, "Favs"), where("id", "==", selectedId));
            const querySnapshot = getDocs(q);
    
            return !querySnapshot.empty; // Returns true if the ID exists
        } catch (error) {
            console.error("Error checking ID:", error);
            return false;
        }
    };

    console.log(checkIfIdExists());
    


    if (!recipeData) return <h2>Loading...</h2>;

    const { recipe, loading, error } = recipeData;
    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error: {error}</h2>;
    if (!recipe) return <h2>No recipe found.</h2>;


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
            
        </div>
    );
};

export default IdComponent;
