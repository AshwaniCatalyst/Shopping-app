import { Add_To_Cart, Clear_Cart } from "../constants";
const initialState = {
  productData: []
};
const cartItems = (state = initialState, action) => {
  switch (action.type) {
    case Add_To_Cart: {
      return{
        ...state,
       productData:[
        ...state.productData,
        action.data
       ]
      }
      // const {id, title, image, price} = action.payLoad;
      // return{
      //   ...state,
      //  productData:[
      //   ...state.productData,
      //   {
      //     id : id,
      //     title : title,
      //     image : image,
      //     price : price,
      //     counter : 1
      //   }
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
