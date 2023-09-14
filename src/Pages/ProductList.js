import React, { useEffect, useState } from "react";
import productList from "../ValidJSON/validData.json";
import "./productlist.scss";
import CheckBox from "../Components/CheckBox";
import Button from "../Components/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  increament,
  getCartData,
  perticularItemCount,
  getItem,
  getQuantity,
  favouritesItems,
} from "../redux/slice/productSlice";
import { useNavigate } from "react-router-dom";
import Slider from "../Components/Slider";
import Accordion from "react-bootstrap/Accordion";

const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const [checkedCategory, setCheckedCategory] = useState([]);
  const [uniqueCategory, setUniqueCategory] = useState([]);
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setProductData(productList?.clothes?.women);
    const uniqueTypes = Array.from(
      new Set(productList?.clothes?.women?.map((val) => val?.type))
    );
    setUniqueCategory(uniqueTypes);
  }, []);
console.log("checkedCategory",checkedCategory)
  const handleCheckedCategory = (category) => {
    if (checkedCategory.includes(category)) {
      setCheckedCategory(checkedCategory.filter((item) => item !== category));
    } else {
      setCheckedCategory([...checkedCategory, category]);
    }
  };
  const filteredData = productData.filter((val) => {
    return checkedCategory.includes(val.type);
  });
  console.log("filteredData", filteredData);
  const handleAddItems = (val, id) => {
    console.log("iiiiiii", id);
    dispatch(increament());
    let quantityData = { ...val, quantity: 1 };
    dispatch(getCartData({ quantityData, size: size }));
  };
  const handleSize = (sizeData) => {
    setSize(sizeData);
  };
  const handleFavouriteItems = (val,id)=>{
    navigate("/favourites");
    let data = {...val}
    dispatch(favouritesItems({data,id,size: size}))
  }
  return (
    <div className="card-container">
      <Slider />
      <div className="filter-container mt-4">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Women</Accordion.Header>
            <Accordion.Body>
              {uniqueCategory?.map((val, index) => {
                return (
                  <div className="filter-wrapper">
                    <CheckBox
                      type="checkbox"
                      checked={checkedCategory.includes(val)}
                      onChange={() => handleCheckedCategory(val)}
                      className="category-checkbox"
                    />
                    <div>{val}</div>
                  </div>
                );
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="clothes-data mt-3">
        {checkedCategory?.length > 0 ? (
          <>
            {filteredData?.map((val, index) => {
              return (
                <div className="card-wrapper">
                  <img
                    src={val?.image}
                    alt="shirt-images"
                    className="card-image"
                  />

                  <div style={{ fontSize: "20px", fontWeight: "500" }}>
                    {val?.title}
                  </div>

                  <div style={{ fontSize: "15px" }}>Rs {val?.price}</div>
                  <div className="size-chart">
                    <div className="size" onClick={() => handleSize("S")}>
                      S
                    </div>
                    <div className="size" onClick={() => handleSize("M")}>
                      M
                    </div>
                    <div className="size" onClick={() => handleSize("XL")}>
                      XL
                    </div>
                    <div className="size" onClick={() => handleSize("L")}>
                      L
                    </div>
                  </div>
                  <div>
                    <Button
                      onClick={() => handleAddItems(val, val?.id)}
                      className="add-to-cart"
                    >
                      Add to Cart
                    </Button>
                    <div onClick={()=>handleFavouriteItems(val,val?.id)}>
                      <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>
            {productData &&
              productData?.map((val, index) => {
                return (
                  <div className="card-wrapper mt-3">
                    <img
                      src={val?.image}
                      alt="shirt-images"
                      className="card-image"
                    />
                    <div style={{ fontSize: "20px", fontWeight: "500" }}>
                      {val?.title}
                    </div>
                    <div>{val?.price}</div>
                    <div className="size-chart">
                      <div className="size" onClick={() => handleSize("S")}>
                        S
                      </div>
                      <div className="size" onClick={() => handleSize("M")}>
                        M
                      </div>
                      <div className="size" onClick={() => handleSize("XL")}>
                        XL
                      </div>
                      <div className="size" onClick={() => handleSize("L")}>
                        L
                      </div>
                    </div>
                    <div className="likes">
                      <Button
                        onClick={() => handleAddItems(val, val?.id)}
                        className="add-to-cart"
                      >
                        Add to Cart
                      </Button>
                      <div onClick={()=>handleFavouriteItems(val,val?.id)}>
                        <i className="fa fa-heart-o liked-data" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                );
              })}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;
