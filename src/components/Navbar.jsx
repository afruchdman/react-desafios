import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "./CartWidget.jsx";
const Navbar = () => {
        return (
        <>



          <nav className="navbar navbar-expand-lg navbar-light bg-success bg-gradient ">
            <div className="container-fluid  ">
              <a className="navbar-brand" href="../index.js">FRUCHDMAN</a>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="../index.js">PRODUCTOS</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="../index.js">SERVICIOS</a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link active" aria-current="page" href="../index.js">NOSOTROS</a>
                  </li> 
                </ul>
              </div>
              <div>
                < ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item"><CartWidget/></li>
                  <li><span> </span> </li>
                  <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success bg-black" type="submit">Buscar!</button>
                  </form>
                </ul>
              </div>
            </div>
          </nav>


        </>
        );
    }
    export default Navbar;