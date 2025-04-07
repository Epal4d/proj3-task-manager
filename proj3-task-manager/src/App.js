import {HashRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Contact from "./components/ContactUs";
import About from "./components/About"


function App() {
  return (
    <>
      <HashRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
      </HashRouter>

    </>
  );
}

export default App;
