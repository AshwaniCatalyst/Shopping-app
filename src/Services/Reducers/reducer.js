// import { createSlice } from "@reduxjs/toolkit";
import { Add_To_Cart, Clear_Cart } from "../constants";
const initialState = {
  productData: [],
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
    case Add_To_Cart: {
      debugger
      // console.log("action id", action.payLoad.id);
      let count = 1;
      var addedProduct;
      const { id, title, image, price } = action.payLoad;
      state.productData.map((ele) => {
        console.log("reducer",action, ele)
        debugger
        if (ele && action.payLoad.id === ele.id ) {
          ele.count = ele.count + 1;
          addedProduct = {
            ...ele, count:ele.count+1
          }
        } else {
          debugger
          addedProduct =
          {
            id: id,
            title: title,
            image: image,
            price: price,
            count: count,
          }
        }

        return <></>;
      });
      return {
        ...state,
        productData: [
          ...state.productData,
          addedProduct
        ],
      };
      // return{
      //   ...state,
      //  productData:[
      //   ...state.productData,
      //   action.data
      //  ]
      // }
    }

    case Clear_Cart:
      return {
        productData: [],
      };

    default:
      return state;
  }
};
export default cartItems;
