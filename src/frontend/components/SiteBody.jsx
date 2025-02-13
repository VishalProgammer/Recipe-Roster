import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './navbar.css'
import Body from './Body';
import { useState } from 'react';
import LogoutFooter from './Logout';

export const SiteBody = (props) => {
  const [homeVisible, sethomeVisible] = useState(true);
  const [exploreVisible, setexploreVisible] = useState(false);
  const [addRecipeVisible, setaddRecipeVisible] = useState(false);

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
                          setaddRecipeVisible(false);
                        }}
                        className="nav-link">Explore</a>
                        </li>
                        <li className="nav-item">
                        <a id='option' 
                        onClick={() => {
                          sethomeVisible(false);
                          setexploreVisible(false);
                          setaddRecipeVisible(true);
                        }}
                        className="nav-link " >Add Recipe</a>
                        </li>
                    </ul>
                  </div>
                  <div id='right-nav'>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                  </div>
                </div>
            </div>
        </nav>

    <br />

    <Body homeVisibility={homeVisible} exploreVisibility={exploreVisible} addRecipeVisibility={addRecipeVisible}/>

    <footer><LogoutFooter/></footer>
  </>

}