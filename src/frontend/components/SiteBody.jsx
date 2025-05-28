import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './NavBar.css'
import Body from './Body';
import { useState } from 'react';
import LogoutFooter from './Logout';

export const SiteBody = () => {
  const [homeVisible, sethomeVisible] = useState(true);
  const [exploreVisible, setexploreVisible] = useState(false);

  return<>
  {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="navbar-body" id="navbarSupportedContent">
                  <div id='left-nav'>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a id='option'
                        onClick={() => window.location.reload()}
                        className="nav-link ">Home</a>
                        </li>
                        <li className="nav-item">
                        <a id='option'
                        onClick={() => {
                          sethomeVisible(false);
                          setexploreVisible(true);
                          setFavoriteRecipesListVisible(false);
                        }}
                        className="nav-link">Explore</a>
                        </li>

                        {/* IGNORED FEATURE: */}

                        {/* <li className="nav-item">
                        <a id='option' 
                        onClick={() => {
                          sethomeVisible(false);
                          setexploreVisible(false);
                          setFavoriteRecipesListVisible(true);
                        }}
                        className="nav-link " >Favorite Recipes</a>
                        </li> */}

                    </ul>
                  </div>
                </div>
            </div>
        </nav>

    <br />

    <Body homeVisibility={homeVisible} exploreVisibility={exploreVisible}/>

    <footer><LogoutFooter/></footer>
  </>

}