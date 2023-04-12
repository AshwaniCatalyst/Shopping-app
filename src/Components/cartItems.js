import { Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Services/Actions/action";

const CartItems = () => {
  const CartItems = useSelector((state) => state.cartItems.productData);
  // var temp = new Set();  
  const dispatch = useDispatch();
  console.log("cart data", CartItems);

  return (
    <>
      <div className="cartOuterContainer">
        {CartItems.length === 0 && (
          <div>
            <h4> No Items Added</h4>
          </div>
        )}
        {CartItems.map((productDetails, index) => {
          return (
            <div key={index} className="flex cartProductOuterContainer">
              <div>
                <img
                  src={productDetails.image}
                  alt="ProductImage"
                  className="product-Image"
                />
              </div>
              <div className="cartProductDetails">
                <Typography variant="h4">{productDetails.title}</Typography>
                <Typography variant="h4">${productDetails.price}</Typography>
                <Typography variant="h4">x{productDetails.count}</Typography>
              </div>
            </div>
          );
        })}
        {CartItems.length >= 1 && (
          <div className="cartButtons">
            <Button variant="contained" onClick={() => dispatch(clearCart())}>
              Clear Cart
            </Button>
            <Button variant="contained">Place Order</Button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartItems;
