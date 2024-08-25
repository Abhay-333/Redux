import "./App.css";
import Users from "./Components/Users";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";

function App() {
  return (
    <div className="bg-zinc-900 min-h-screen w-full text-white">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/users" element={<Users/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
