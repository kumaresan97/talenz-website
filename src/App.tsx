import "./App.css";
import Navbar from "./components/Navbar";
import Maincontent from "./pages/Maincontent/Maincontent";
import "./components/Navbar.css";
//import "./pages/Maincontent/home/Home.css";
import Banner from "./pages/Maincontent/banners/Banner";
import "../src/pages/Maincontent/content/Content.css";
import Register from "./form/Register";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Maincontent /> */}
      <Routes>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/" element={<Maincontent />}></Route>
      </Routes>
    </div>
  );
}

export default App;
