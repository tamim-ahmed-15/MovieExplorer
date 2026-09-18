import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { useState } from "react";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Movies from "./pages/Movies.jsx";

function App() { 
  
  const [page, setPage] = useState("home");

  return (
      
    <div>
      <Navbar setPage={setPage}/>

      {page === "home" && <Home setPage={setPage}/>}
      {page === "movies" && <Movies/>}

      <Footer/>
    </div>
    
  )
}

export default App