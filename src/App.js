import './App.css';
import Navbar from "./components/Menu.jsx";
import Title from "./components/Title.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
    <div className="App">
      <Title/><Body/><Footer/>
    </div>
    </>
  );
}

export default App;
