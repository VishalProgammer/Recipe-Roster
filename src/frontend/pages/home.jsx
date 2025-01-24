import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './home.css'

const Home = (props) => {
    return<>
    {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>

    <br />

    {/* Recipe Highlights */}
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
        <div className="carousel-item active">
          <img
            src="https://i.pinimg.com/736x/f0/3d/0e/f03d0e5563fc362ec3db2a3399f972bb.jpg"
            width="200px"
            height="400px"
            className="d-block w-100"
            alt="111"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://i.pinimg.com/236x/33/f0/46/33f046bfc8179ffea4242836aba5098e.jpg"
            width="200px"
            height="400px"
            className="d-block w-100"
            alt="123"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://i.pinimg.com/236x/b2/1e/f5/b21ef5e157cfdc6e33447a776b8f09f4.jpg"
            width="200px"
            height="400px"
            className="d-block w-100"
            alt="321"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    <hr /><br />

    {/* Recipe Suggestions */}
    <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
            <div className="card">
            <img src="https://i.pinimg.com/236x/58/e4/33/58e43306c3e4e0b2692c8ed3c0917efb.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src="https://i.pinimg.com/236x/37/ef/d1/37efd1f101efb96f592a3bcc0420601e.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src="https://i.pinimg.com/236x/f3/87/78/f38778445e8f3162621d8c1e44ad5233.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src="https://i.pinimg.com/236x/e4/83/29/e4832963257aff8de1522a02e8549f12.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
            </div>
            </div>
        </div>
    </div>
    </>
}

export default Home;