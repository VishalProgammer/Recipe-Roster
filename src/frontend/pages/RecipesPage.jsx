import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './RecipesPage.css';

export const Recipes = (props) =>{
    const [data] = props

    return<div className="row row-cols-1 row-cols-md-3 g-4">
      {{data}.map((recipe) => (
        <div className="col" key={recipe.id}>
            <div className="card">
                <img src={recipe.image || img_error} className="card-img-top" alt={recipe.title || "Recipe"} />
                <div className="card-body">
                    <h5 className="card-title">{recipe.title || "No Title Available"}</h5>
                </div>
            </div>
        </div>
    ))}
    </div>
}