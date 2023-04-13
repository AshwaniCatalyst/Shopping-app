// import { createSlice } from "@reduxjs/toolkit";
import { Add_To_Cart, Clear_Cart } from "../constants";
const initialState = {
  productData: [],
  counter : 0
};
// const cartItems = createSlice({
//   name:"cart",
//   initialState,
//   reducers:{
//     addToCart(state, action){
//       const itemIndex = state.productData.findIndex((item)=>item.id===action.payLoad.id);
//       if(itemIndex>=0){
//         state.productData[itemIndex].cartQuantity+=1;
//       }
//       else{
//         const tempProduct = {...action.payload, cartQuantity:1}
//         state.productData.push(tempProduct)
//       }
//     }
//   }
// })
const cartItems = (state = initialState, action) => {
  switch (action.type) {
    case Add_To_Cart:
      const productId = state.productData.findIndex(
        (item) => item.id === action.payLoad.id
      );
      if (productId>=0) {
        state.productData[productId].stock += 1;

        return {
          ...state,
          productData: [...state.productData],
          
        };
      } else {
        const NewProduct = { ...action.payLoad, stock: 1 };
        return {
          ...state,
          productData: [...state.productData, NewProduct],
        };
      }

    // case Add_To_Cart: {
    //   var addedProduct;
    //   var currentReduxState;
    //   if (state.productData.length) {
    //     state.productData.map((ele, index) => {
    //       currentReduxState = state;
    //       if (ele && ele.id === action.payLoad.id) {
    //         currentReduxState.productData[index].count = ele.count + 1;
    //         addedProduct = [...currentReduxState.productData];
    //       } else {
    //         addedProduct = [
    //           ...state.productData,
    //           {
    //             id: action.payLoad.id,
    //             title: action.payLoad.title,
    //             image: action.payLoad.image,
    //             price: action.payLoad.price,
    //             count: 1,
    //           },
    //         ];
    //       }
    //     });
    //   }
    //   else {
    //     addedProduct = [
    //       ...state.productData,
    //       {
    //         id: action.payLoad.id,
    //         title: action.payLoad.title,
    //         image: action.payLoad.image,
    //         price: action.payLoad.price,
    //         count: 1,
    //       },
    //     ];
    //   }
    //   return {
    //     ...state,
    //     productData: addedProduct,
    //   };
    // }

    case Clear_Cart:
      return {
        productData: [],
      };

    default:
      return state;
  }
};
export default cartItems;
