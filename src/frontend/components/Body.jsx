import Home from "../pages/home";
import { Explore } from "../pages/explore";
import { AddRecipe } from "../pages/AddNew";

const Body = ({ homeVisibility, exploreVisibility, addRecipeVisibility }) => {
  return (
    <>
      {homeVisibility ? <Home /> : null}
      {exploreVisibility ? <Explore /> : null}
      {addRecipeVisibility ? <AddRecipe /> : null}
      {!homeVisibility && !exploreVisibility && !addRecipeVisibility && <h1>Loading...</h1>}
    </>
  );
};

export default Body;
