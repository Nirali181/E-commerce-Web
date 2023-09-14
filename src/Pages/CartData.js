import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cartdata.scss";
import {
  decreamentQuantity,
  increamentQuantity,
  removeItem,
} from "../redux/slice/productSlice";
import Button from "../Components/Button";

const CartData = () => {
  const dispatch = useDispatch();
  const getAllCartData = useSelector(
    (state) => state?.Product?.getCartItemsData
  );
  const [subtotal, setTotal] = useState(0);
  console.log("getAllCartData", getAllCartData);
  const handleIncreament = (id) => {
    dispatch(increamentQuantity(id));
  };

  const handleDecreament = (id) => {
    dispatch(decreamentQuantity(id));
  };
  useEffect(() => {
    if (getAllCartData) {
      let newTotal = 0;
      getAllCartData?.map((item, id) => {
        console.log("iiiii", item);
        newTotal =
          newTotal + item?.quantityData?.price * item?.quantityData?.quantity;
        setTotal(newTotal);
      });
    }
  }, [getAllCartData]);
  const handleRemove = (id)=>{
    console.log("rerere",id)
    dispatch(removeItem(id))
  }
  return (
    <div className="cart-container">
      <div className="subtotal">
        <div className="subtotal-info">
          <div>Subtotal</div>
          <div>{subtotal.toFixed(2)}</div>
        </div>
        <Button type="submit" className="checkout">
          CheckOut
        </Button>
      </div>

      {getAllCartData?.map((val, id) => {
        return (
          <div className="cart-items mt-5">
            <img src={val?.quantityData?.image} alt="image" />
            <div className="product-container">
              <div className="product-detail">
                <h4 className="">{val?.quantityData?.title}</h4>
                <p className="">{val?.quantityData?.price}</p>
                <div className="">{val?.size}</div>
              </div>
              <div className="remoove-item">
                <div className="product-qty">
                  <div>
                    <i
                      className="fa fa-minus minus-icon"
                      aria-hidden="true"
                      onClick={() => handleDecreament(val?.quantityData?.id)}
                    ></i>
                  </div>
                  <div className="product-quantity">
                    {val?.quantityData?.quantity}
                  </div>
                  <div>
                    <i
                      className="fa fa-plus plus-icon"
                      aria-hidden="true"
                      onClick={() => handleIncreament(val?.quantityData?.id)}
                    ></i>
                  </div>
                </div>
                <div className="mt-3" onClick={()=>handleRemove(val?.quantityData?.id)}>
                  <button className="remove-btn">
                    <i class="fa fa-trash" aria-hidden="true"></i>Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartData;
