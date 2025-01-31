import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './RecipeComponent.css';
import { getRecipesByCuisine } from '../../backend/api/explore-backend';


const CuisineComponent = ({ selectedCuisine }) => {
    const recipes = getRecipesByCuisine(selectedCuisine);
  
    return (<>
        <h1>{selectedCuisine} Recipes:</h1>
        <br />
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {recipes.map((recipe) => (
        <div className="col" key={recipe.id}>
            <div className="card card-r">
                <img src={recipe.image || img_error} className="card-img-top" alt={recipe.title || "Recipe"} />
                <div className="card-body">
                    <h5 className="card-title">{recipe.title || "No Title Available"}</h5>
                </div>
            </div>
        </div>
    ))}
      </div></>
    );
};

export default CuisineComponent;