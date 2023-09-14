import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./favitem.scss";
import {
  getCartData,
  increament,
  removeFavouriteItems,
  removeItem,
} from "../redux/slice/productSlice";
import Button from "../Components/Button";
// import "./productlist.scss";

const FavouriteItems = () => {
  const dispatch = useDispatch();
  const favouriteData = useSelector((state) => state?.Product?.favouriteData);
  console.log("favouriteData", favouriteData);
  const handleAddItems = (val, id) => {
    console.log("iiiiiii", id);
    dispatch(increament());
    let quantityData = { ...val, quantity: 1 };
    dispatch(getCartData({ quantityData, size: favouriteData?.size }));
  };
  const handleRemove = (id) => {
    console.log("rerere", id);
    dispatch(removeFavouriteItems(id));
  };
  return (
    <>
      <div className="fav-container">
        {favouriteData?.map((val, id) => {
          return (
            <div className="fav-items">
              <img src={val?.image} alt="alt image" className="fav-image" />
              <div className="fav-title">{val?.title}</div>
              {val?.size ? <div className="fav-size">{val?.size}</div> : ""}
              <div className="fav-price">{val?.price}</div>
              <div className="flex-column">
                <div>
                  <Button
                    onClick={() => handleAddItems(val, val?.id)}
                    className="add-to-cart"
                  >
                    Add to Cart
                  </Button>
                </div>
                <div className="mt-3" onClick={() => handleRemove(val?.id)}>
                  <button className="remove-btn">
                    <i class="fa fa-trash" aria-hidden="true"></i>Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FavouriteItems;
