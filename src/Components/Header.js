import { AppBar, Badge, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import "./Products.css";

import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const totalCartItems = useSelector((state) => state.cartItems.productData);
  return (
    <>
      <AppBar position="relative">
        <div className="headerOuterContainer flex">
          <div>
            <Link to={"/"}>
              <Typography variant="secondary">
                <h3 className="appLogo">CT Mart</h3>
              </Typography>
            </Link>
          </div>
          <div className="flex links">
            <div>
              <Link to={"/"}>
                <Typography className="headerLinks">Products</Typography>
              </Link>
            </div>
            <div>
              <Badge badgeContent={totalCartItems.length} color="secondary">
                <NavLink to={"/cart"}>
                  <ShoppingCartIcon className="cart-btn" />
                </NavLink>
              </Badge>
            </div>
          </div>
        </div>
      </AppBar>
    </>
  );
};

export default Header;
