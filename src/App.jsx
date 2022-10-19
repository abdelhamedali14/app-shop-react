import "./App.css";
import Container from "./Container";
import ContainerNumber from "./ContainerNumber";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/index";
import Shop from "./components/shop/index";
import Details from "./components/details/index";
import AddToCart from "./components/addtocatr/index";
import { useState } from "react";

function App(props) {
  const [Count, setCount] = useState(0);
  const updateCounter = (newValue) => {
    setCount(newValue);
  };

  return (
    <BrowserRouter>
      <NavBar currentValue={Count} />
      <Routes>
        <Route path="">
          <Route path="contact" element={<ContainerNumber />} />
          <Route path="contact" element={<Container />} />
          <Route
            path="Home"
            element={
              <Home updateCounter={updateCounter} currentValue={Count} />
            }
          />
          <Route path="Shop" element={<Shop />} />
          <Route path="Details/:id" element={<Details />} />
          <Route path="AddToCart" element={<AddToCart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
