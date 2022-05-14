import './App.css';
import Navbar from "./components/Navbar.jsx";
import Title from "./components/Title.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
    <div className="App">
      <Navbar/><Title/><Body/><Footer/>
    </div>
    </>
  );
}

export default App;
