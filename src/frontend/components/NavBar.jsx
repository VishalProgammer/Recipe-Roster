import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './navbar.css'

export const NavBar = (props) => {
  return<>
  {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="navbar-body" id="navbarSupportedContent">
                  <div id='left-nav'>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a id='option' className="nav-link " href="/">Home</a>
                        </li>
                        <li className="nav-item">
                        <a id='option' className="nav-link" href="/">Explore</a>
                        </li>
                        <li className="nav-item">
                        <a id='option' className="nav-link " >Add Recipe</a>
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
  </>

}