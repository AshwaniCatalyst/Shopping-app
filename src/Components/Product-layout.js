import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Button, ButtonGroup, Grid, Typography } from "@mui/material";
import './Products.css'

import { useDispatch } from "react-redux";
import { addToCart } from "../Services/Actions/action";


const ProductLayout = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Axios.get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    
    <>
      {
        <div className="outerContainer flex">
        <Grid container spacing={{ xs: 10, sm:8 , md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }}>{
      products.map((elem,index)=>{
        return (
          <Grid item xs={5} sm={4} md={4} lg={4} key={index}>
            <div className="product-container flex">
            <img src={elem.images[0]} alt="product iamge" className="product-Image"/>
          <Typography variant="h5">{elem.title}</Typography>
          <Typography variant="h6" className="line-clamp">{elem.description}</Typography>
          <ButtonGroup variant="contained">
          <Button onClick={
            ()=> dispatch(addToCart(elem))
            }>Add to Cart</Button>
          <Button>Buy Now</Button>
          </ButtonGroup>
          </div>
          </Grid>
        )
      })
    }
      </Grid>
      </div>
      }
    </>
  );
};

export default ProductLayout;
