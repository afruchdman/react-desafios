//Componente de menú de la pagina
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "./CartWidget.jsx";
import { Link } from "react-router-dom";

const Menu = () => {
        return (

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div  className="navbar-brand" href="#"><Link to='/'>FRUCHDMAN</Link></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <div className="nav-link"><Link to='/category/01'>LIMPIEZA</Link></div>
        <div className="nav-link"><Link to='/category/02'>PERFUMERIA</Link></div>
      </div>
    </div>
  </div>
</nav>
        )
          

    }
    export default Menu;