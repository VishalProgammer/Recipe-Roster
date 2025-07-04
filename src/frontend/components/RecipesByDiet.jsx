import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './RecipeComponent.css';
import { getRecipesByDiet } from '../../backend/api/explore-backend';
import IdComponent from '../components/SingleRecipe';
import { useState } from 'react';


const DietComponent = ({ selectedDiet }) => {
    const recipes = getRecipesByDiet(selectedDiet);
    const [selectedId, setSelectedId] = useState('');
    const [idPageVisible, setIdPageVisible] = useState(false);
  
    if(idPageVisible){
        return(<>
        <IdComponent selectedId={selectedId}/>
        <button className="btn btn-primary" onClick={handleSave}>Add to Fav</button>
        </>)
    }
    else return (<>
        <h1>{selectedDiet} Recipes:</h1>
        <br />
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {recipes.map((recipe) => (
        <div className="col" 
        onClick={() =>{
            setIdPageVisible(true);
            setSelectedId(recipe.id);
        } }
        key={recipe.id}>
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

export default DietComponent;