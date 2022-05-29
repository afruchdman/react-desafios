//Componente de menú de la pagina
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "./CartWidget.jsx";
import { Link } from "react-router-dom";

const Menu = () => {
        return (
          <>
<nav className="navbar navbar-light bg-light">
  <form className="container-fluid justify-content-start">
    <button className="btn btn-sm btn-outline-success me-2" type="button"><Link to="/">INICIO</Link></button>
    <button className="btn btn-sm btn-outline-success me-2" type="button"><Link to="/category/1">LIMPIEZA</Link></button>
    <button className="btn btn-sm btn-outline-success me-2" type="button"><Link to="/category/2">PERFUMERIA</Link></button>
    <button className="btn btn-sm btn-outline-success me-2" type="button"><CartWidget/></button>
  </form>
</nav>
          </>
        );
    }
    export default Menu;