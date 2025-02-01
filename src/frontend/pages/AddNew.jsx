import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './AddNew.css';

export const AddRecipe = (props) => {
    return(
        <>
            <h1 className='h1-a'>Make New Recipe!</h1>

            <div className="input-group mb-3 name">
                <input placeholder="Name of the Dish" type="text" className="form-control " aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>

            {/* image input */}
            <div className='file-input'>
                <label for="formFileLg" className="form-label">Add Picture of your Yummy Dish!!</label>
                <input className="form-control form-control-lg" id="formFileLg" type="file"/>
            </div>

            <div class="input-group mb-3 atr">
                <span class="input-group-text" id="inputGroup-sizing-default">Diet</span>
                <input type="text" class="form-control" placeholder="ex:- gluten free, dairy free, etc." aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>

            <div class="input-group mb-3 atr">
                <span class="input-group-text" id="inputGroup-sizing-default">Cuisine</span>
                <input type="text" class="form-control" placeholder="ex:- italian, indian, etc." aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>

            <div class="mb-3 name">
                <label for="exampleFormControlTextarea1" class="form-label">List of All Ingridients:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" 
                placeholder='
- 3 cup of rice
- 2 tablespoon salt
- 3 chili peppers (chopped)
- half tablespoon turmeric power
- cooking oil' 
                rows="3"></textarea>
            </div>

            <div className="mb-3 name">
                <label for="exampleFormControlTextarea1" class="form-label">Step by Step Summary:</label>
                <textarea className="form-control"  placeholder="First, cook the rice, preferably a day before, to ensure it's less sticky. Then, prepare your ingredients by chopping vegetables like carrots, peas, and onions, along with garlic and any optional protein such as chicken, shrimp, or tofu. In a large pan or wok, heat some oil over medium-high heat. Cook your protein until fully done, then set it aside. Next, add garlic and the chopped vegetables to the pan, stir-frying until they become tender. After that, add the rice to the pan and stir it to break it apart. Season with soy sauce, salt, and pepper to taste, and you can also add a dash of sesame oil. Push the rice to one side of the pan and scramble an egg in the open space. Finally, mix everything together and cook for another minute or two before serving. Enjoy your fried rice!"/>
            </div>

            <div class="d-grid gap-2 btn-bd">
                <button class="btn btn-primary btn-b" type="button">Add</button>
            </div>
            <br />
        </>
    )
}