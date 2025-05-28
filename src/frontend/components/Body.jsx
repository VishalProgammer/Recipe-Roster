import Home from "../pages/home";
import { Explore } from "../pages/explore";

const Body = ({ homeVisibility, exploreVisibility }) => {

  return (
    <>
      {homeVisibility && <Home />}
      {exploreVisibility && <Explore />}
      {!homeVisibility && !exploreVisibility && <h1>Loading...</h1>}
    </>
  );
};

export default Body;
