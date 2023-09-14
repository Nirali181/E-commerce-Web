import React, { useState } from "react";
import "./header.scss";
import Input from "./Input";
import Button from "./Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const count = useSelector((state)=>state?.Product?.productCount)
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate()
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCartItems = ()=>{
    navigate("/cart")
  }
  return (
    <div className="header-container">
      <div className="left">
        <div>Shopify</div>
      </div>
      <div className="right">
        <div>Products</div>
        <div>Sale</div>
        <div>Cart</div>
        <div className="item-count" onClick={handleCartItems}>{count}</div>
        <div className="search-bar">
          <Input
            name="search"
            value={inputValue}
            onChange={handleChange}
            placeholder="Search"
            className="search-value"
          />
          <Button type="submit" className="search-btn">Search</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
