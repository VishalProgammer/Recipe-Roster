import Home from "../pages/home";
import { Explore } from "../pages/explore";
import FavRecipeDisplay from "../pages/FavoriteRecipesDisplay";
import { useState } from 'react';

const Body = ({ homeVisibility, exploreVisibility, FavoriteRecipesListVisibility }) => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey(prevKey => prevKey + 1); // Change key to force re-render
  };

  return (
    <>
      {homeVisibility && <Home key={refreshKey} onClick={handleRefresh} />}
      {exploreVisibility && <Explore key={refreshKey} onClick={handleRefresh} />}
      {FavoriteRecipesListVisibility && <FavRecipeDisplay key={refreshKey} onClick={handleRefresh} />}
      {!homeVisibility && !exploreVisibility && !FavoriteRecipesListVisibility && <h1>Loading...</h1>}
    </>
  );
};

export default Body;
