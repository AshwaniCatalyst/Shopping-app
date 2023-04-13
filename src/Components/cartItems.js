import { Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Services/Actions/action";
const CartItems = () => {
  const CartItems = useSelector((state) => state.cartItems.productData);
  
  const dispatch = useDispatch();

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
                  src={productDetails.images[0]}
                  alt="ProductImage"
                  className="product-Image"
                />
              </div>
              <div className="cartProductDetails">
                <Typography variant="h4">{productDetails.title}</Typography>
                <Typography variant="h4">${productDetails.price}</Typography>
                <Typography variant="h4">x{productDetails.stock}</Typography>
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
