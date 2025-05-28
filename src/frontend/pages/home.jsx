import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './home.css'
import { useState } from 'react';
import IdComponent from '../components/SingleRecipe';

// APIs:
import { getRandomRecipes } from '../../backend/api/home-backend';
import { getTopRecipes } from '../../backend/api/home-backend';
import { useEffect } from 'react';

const Home = (props) => {
  const [topRecipes, setTopRecipes] = useState([]);
  const [randomRecipes, setRandomRecipes] = useState([]);
  const img_error = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARQAAAC2CAMAAAAvDYIaAAAAaVBMVEX///9RUVFZWVl1dXWOjo6amprOzs6+vr78/Pzn5+eXl5dHR0fLy8tvb2/v7++KioqioqLX19dERET29vbGxsbe3t7u7u7AwMCDg4NcXFynp6dUVFRNTU2xsbFqamri4uJ7e3s/Pz9kZGThv4iLAAACi0lEQVR4nO3b0XaiMBSFYdEQAgKCoFjB0pn3f8gBEqh2bOHKsJr/u4NycdjrEJJINxsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgkqa2K1idIGn2dXa2XcaaKN+rt9utl7S2K1mRoNkOvJ3tSqwKs8vlejIH6m1rNKXVquyqPpLdLtlJfSS9MRQvs1uXTXkXSe9d90pcj6HUkeXK7FG+CSXRjdFOoXhXy6XZk+5Gl2I4kYypNLm5RJbSXn1W3IWiZyb5m07F009Pke07zU3ZLPLVissYijBnytqr69o7DDGoj73X2wunUqnGMaUaz/SvaGGeHV9n0qVys1WgFSLR4+xdKyhlDs7eZOtUq6hr8v6+uxXP/hYcp1D+nJ5d8Hup9rsbzvZTKMf4pTWtWHXXKfn85b/AgkEibKZQGgfGFJVnfpbP3agS09vHhfnt9SCEOMy+Z9O/OpXjx9OB+HcJ+ky6VGa3B9LIO+6PdebAw5MKY8HNtuUtdmIXrr2YUA4OPBVLhWMoglAmRWQaxa3V74xcD7QitF3IqshDRzi2npml8nJ27gYAAF6AGf5XRZxFmWu//M25Rb7vR9X8hQ6RfSZdKk5slCwVmFBolU/qZkIJbFeyJrEJhWXynXM0DLRX1sn32iyKxJU9pkdFHrfL+mT6BgGTcxiGfH79KA179MqD8xCKg//BoH5YGxZDKK+rZSUKWVby+1j6VJxbUBdBr/ohlcK5TDb5EErgxodKS+lMAvn5gklPJ/cGkUfl11DOMpax440T6lCmnRUVy07sdq8o+aVRCKWX5vn9+0WHwsz+QT6kwsT+gWql5IOE/7BZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGC5f6FUGVYMfOfLAAAAAElFTkSuQmCC'
  const [selectedId, setSelectedId] = useState('');
  const [idPageVisible, setIdPageVisible] = useState(false);


  useEffect(() => {
    const fetchtopRecipes = async () => {
      const data = await getTopRecipes(); // Import data from RecipeFetcher
      setTopRecipes(data);
    };

    fetchtopRecipes();
  }, []);

  useEffect(() => {
    const fetchrandomRecipes = async () => {
      const data = await getRandomRecipes(); // Import data from RecipeFetcher
      setRandomRecipes(data);
    };

    fetchrandomRecipes();
  }, []);

  
  
    if(idPageVisible){
        return(<>
        <IdComponent selectedId={selectedId}/>
        
        </>)
    }
    else return<>
    

    <h1 className='home-highlights'>Recipe Highlights</h1>
    {console.log(randomRecipes)}
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active"
        onClick={() =>{
          setIdPageVisible(true);
          setSelectedId(topRecipes[0].id);
      } }
        >
          
          <img
            src={topRecipes.length>0?topRecipes[0].image :  img_error}
            width="200px"
            height="400px"
            className="d-block w-100"
            alt={topRecipes.length>0?topRecipes[0].id :  '123'}
          />
          <div className="carousel-caption d-none d-md-block">
            <h3 className='TD-title'>{topRecipes.length>0?topRecipes[0].title :  'Loading....'}</h3>
          </div>
        </div>

        <div className="carousel-item"
        onClick={() =>{
          setIdPageVisible(true);
          setSelectedId(topRecipes[1].id);
      } }>
          <img
            src={topRecipes.length>0?topRecipes[1].image :  img_error}
            width="200px"
            height="400px"
            className="d-block w-100"
            alt={topRecipes.length>0?topRecipes[1].id :  '1234'}
          />
          <div className="carousel-caption d-none d-md-block">
            <h3 className='TD-title'>{topRecipes.length>0?topRecipes[1].title :  'Loading....'}</h3>
          </div>
        </div>
        <div className="carousel-item"
        onClick={() =>{
          setIdPageVisible(true);
          setSelectedId(topRecipes[2].id);
      } }>
          <img
            src={topRecipes.length>0?topRecipes[2].image :  img_error}
            width="200px"
            height="400px"
            className="d-block w-100"
            alt={topRecipes.length>0?topRecipes[2].id :  '12345'}
          />
          <div className="carousel-caption d-none d-md-block">
            <h3 className='TD-title'>{topRecipes.length>0?topRecipes[2].title :  'Loading....'}</h3>
          </div>
        </div>
      </div>
      <div className='corousel-arrow'>
      <button
        className="carousel-control-prev side-btn"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next side-btn"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      </div>
    </div>

    <hr /><br />

    {/* Recipe Suggestions */}
    <h1>New Recipes for you:</h1>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {randomRecipes.map((recipe) => (
        <div className="col" 
        onClick={() =>{
          setIdPageVisible(true);
          setSelectedId(recipe.id);
      } }
        key={recipe.id}>
            <div className="card">
                <img src={recipe.image || img_error} className="card-img-top" alt={recipe.title || "Recipe"} />
                <div className="card-body">
                    <h5 className="card-title">{recipe.title || "No Title Available"}</h5>
                </div>
            </div>
        </div>
    ))}
    </div>
    </>
    
}

export default Home;

