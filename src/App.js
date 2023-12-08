import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Reactnavbar from "./Component/Reactnavbar/Reactnavbar.jsx";
import Addproducs from "./Component/Addproducs/Addproducs";
import Addtocard from "./Component/Addtocard/Addtocard";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
function App() {
  return (
    <div className="container-fluid">
    <Reactnavbar/>
      <Routes>
        {/* <Route path="/" element={<Reactnavbar />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path='/addproduc' element={<Addproducs/>}/>
        <Route path='/producs/:id' element={<Addtocard/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
