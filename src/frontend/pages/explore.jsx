import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './explore.css';
import { Recipes } from './RecipesPage';
import { useEffect, useState, useCallback } from 'react';

// API imports:
import { getIngredients, getRecipesByCuisine } from '../../backend/api/explore-backend';

export const Explore = () => {
    const [ingredients, setIngredients] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [recipePageVisible, setRecipePageVisible] = useState(false);

    const img_error = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARQAAAC2...';

        // All Cuisine List:
        const cuisinesWithImages = [
            { cuisine: 'Italian', image: 'https://i.pinimg.com/736x/09/f9/75/09f975f599ade373312a08fdf2eabf3a.jpg' },
            { cuisine: 'Mexican', image: 'https://i.pinimg.com/236x/0e/2c/85/0e2c859cf0cf769b442065538e5a2239.jpg' },
            { cuisine: 'Indian', image: 'https://i.pinimg.com/236x/af/23/30/af2330f598175d2745f0fbc1db3db483.jpg' },
            { cuisine: 'Chinese', image: 'https://i.pinimg.com/474x/38/2b/e8/382be895ccae84bf656146a30a633d63.jpg' },
            { cuisine: 'Japanese', image: 'https://i.pinimg.com/236x/1f/5b/ba/1f5bba978e62bc1d04ae390ff7688d35.jpg' },
            { cuisine: 'French', image: 'https://i.pinimg.com/236x/8a/41/5f/8a415ffc4c86b5f538bf953145ab0b40.jpg' },
            { cuisine: 'American', image: 'https://i.pinimg.com/474x/36/83/fc/3683fc8d8130f3052fb33578402a3ce0.jpg' },
            { cuisine: 'Mediterranean', image: 'https://i.pinimg.com/236x/ca/93/a1/ca93a15221d89333da4f58226441fa21.jpg' },
            { cuisine: 'Thai', image: 'https://i.pinimg.com/236x/56/91/3e/56913e2cc2823e0cf25a03edeb80724c.jpg' },
            { cuisine: 'Spanish', image: 'https://i.pinimg.com/474x/5c/1d/d7/5c1dd761ef939f62fae321cc83430ef4.jpg' },
            { cuisine: 'Greek', image: 'https://i.pinimg.com/474x/fd/e8/78/fde878ac1176a76f6b1720a306d87b06.jpg' },
            { cuisine: 'Korean', image: 'https://i.pinimg.com/474x/b8/cc/dc/b8ccdc0e75b524cb0f7949787f133be9.jpg' },
            { cuisine: 'Turkish', image: 'https://i.pinimg.com/236x/95/12/7e/95127ee8d9158640d5a103ca2829f88a.jpg' },
            { cuisine: 'Lebanese', image: 'https://i.pinimg.com/236x/2f/ce/a4/2fcea4e7f7ea5bd962dc988f5026bfb3.jpg' },
            { cuisine: 'Vietnamese', image: 'https://i.pinimg.com/236x/8d/b4/b4/8db4b45be7c79cd09eb7f46de1b76490.jpg' }
        ];
    
        // All Diets List:
        const dietCategories = [
            { name: "Gluten Free", image: "https://i.pinimg.com/236x/64/64/2a/64642ac78a1297f40bd4b3d8e1cdd0e2.jpg" },
            { name: "Ketogenic", image: "https://i.pinimg.com/236x/0a/b5/2e/0ab52ef123be862277f4eda8eb3835f2.jpg" },
            { name: "Vegetarian", image: "https://i.pinimg.com/236x/e9/c1/b9/e9c1b9bd82748ad18c196578cd341c04.jpg" },
            { name: "Lacto-Vegetarian", image: "https://cookieandkate.com/images/2024/11/spinach-lasagna-recipe-1-276x368.jpg" },
            { name: "Ovo-Vegetarian", image: "https://i.pinimg.com/236x/af/6b/62/af6b62bf94042b14aaca1f11bfaa5079.jpg" },
            { name: "Vegan", image: "https://i.pinimg.com/236x/ab/a2/57/aba257c9307af8dd7249ad15fdf8bf90.jpg" },
            { name: "Pescatarian", image: "https://i.pinimg.com/236x/80/64/e0/8064e0b49090bf7ac52830761953d23f.jpg" },
            { name: "Paleo", image: "https://i.pinimg.com/236x/26/91/34/269134cbec8f5756b28d2412ac998f00.jpg" },
            { name: "Primal", image: "https://i.pinimg.com/236x/4f/e3/b0/4fe3b0dad1bd6c6ac747c160e80e4ada.jpg" },
            { name: "Low FODMAP", image: "https://i.pinimg.com/236x/2a/86/64/2a866444b30a661d4a05994cf94271ff.jpg" },
            { name: "Whole30", image: "https://i.pinimg.com/236x/60/59/10/605910e610da5cfbe2f39abcbf8e6e81.jpg" }
        ];
    
        // All Ingredients List:
        const commonIngredients = [
            { name: "Salt", image: "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg" },
            { name: "Sugar", image: "https://spoonacular.com/cdn/ingredients_100x100/sugar-in-bowl.png" },
            { name: "Butter", image: "https://spoonacular.com/cdn/ingredients_100x100/butter.jpg" },
            { name: "Apple", image: "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg" },
            { name: "Milk", image: "https://spoonacular.com/cdn/ingredients_100x100/milk.png" },
            { name: "Flour", image: "https://spoonacular.com/cdn/ingredients_100x100/flour.png" },
            { name: "Garlic", image: "https://spoonacular.com/cdn/ingredients_100x100/garlic.jpg" },
            { name: "Almonds", image: "https://spoonacular.com/cdn/ingredients_100x100/almonds.jpg" },
            { name: "Tomato", image: "https://spoonacular.com/cdn/ingredients_100x100/tomato.jpg" },
            { name: "Olive Oil", image: "https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg" }
        ];

    // Fetch Recipes by Cuisine
    const fetchIngredients = async (prop) => {
        const data = await getRecipesByCuisine(prop);
        setRecipes(data);
        setRecipePageVisible(true);
    };

    if (recipePageVisible) {
        return <Recipes data={recipes} />;
    }

    return (
        <>
            <h1>Cuisines:</h1>
            <div className="scroll-container">
                {cuisinesWithImages.map((item, index) => (
                    <div className="card card-e text-bg-dark" onClick={() => fetchIngredients(item.cuisine)} key={index}>
                        <img src={item.image || img_error} className="card-img" alt={item.cuisine} />
                        <div className="card-img-overlay">
                            <h4 id="card-t" className="card-title">{item.cuisine}</h4>
                        </div>
                    </div>
                ))}
            </div>

            <br />
            <h1>Diets:</h1>
            <div className="scroll-container">
                {dietCategories.map((item, index) => (
                    <div className="card card-e text-bg-dark" key={index}>
                        <img src={item.image || img_error} className="card-img" alt={item.name} />
                        <div className="card-img-overlay">
                            <h4 id="card-t" className="card-title">{item.name}</h4>
                        </div>
                    </div>
                ))}
            </div>

            <br />
            <h1>Ingredients:</h1>
            <div className="scroll-container">
                {commonIngredients.map((item, index) => (
                    <div className="card card-i text-bg-white" key={index}>
                        <img src={item.image || img_error} className="card-img" alt={item.name} />
                        <div className="card-img-overlay">
                            <h4 id="card-t" className="card-title">{item.name}</h4>
                        </div>
                    </div>
                ))}
            </div>

            <footer>[Tip: Hold Shift + Scroll on PC to scroll horizontally]</footer>
        </>
    );
};
