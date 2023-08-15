import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Navbar from "./components/Navbar.js";
import Homescreen from "./screens/Homescreen";
import Cartscreen from "./screens/Cartscreen";
import Menuscreen from "./screens/Menuscreen";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";
import Orderscreen from "./screens/Orderscreen";
import Footer from "./components/Footer";
import Dashboard from "./screens/Dashboard";
import Successscreen from "./screens/Successscreen";
import CustomPizzascreen from "./screens/CustomPizzascreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/menu" element={<Menuscreen />} />
          <Route path="/cart" element={<Cartscreen />} />
          <Route path="/login" element={<Loginscreen />} />
          <Route path="/register" element={<Registerscreen />} />
          <Route path="/orders" element={<Orderscreen />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/success" element={<Successscreen />} />
          <Route path = "/custompizza" element={<CustomPizzascreen/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
