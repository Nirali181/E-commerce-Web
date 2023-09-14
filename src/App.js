import "./App.scss";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Slider from "./Components/Slider";
import ProductList from "./Pages/ProductList";
import CartData from "./Pages/CartData";
import CommonLayOut from "./CommonLayOut/CommonLayOut";
import FavouriteItems from "./Pages/FavouriteItems";

function App() {
  return (
    <div>
     
      <Routes>
        <Route element={<CommonLayOut />}>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartData />} />
          <Route path="/favourites" element={<FavouriteItems />} />
        </Route>
      </Routes>
     
    </div>
  );
}

export default App;
