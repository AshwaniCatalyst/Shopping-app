import { Add_To_Cart,Clear_Cart } from "../constants";
export const addToCart=(data)=>{
    return{ 
        type: Add_To_Cart,
        // payLoad:{
        //     id : data.id,
        //     title: data.title,
        //     image : data.images[0],
        //     price : data.price,
        //     counter : 0
        // },
        payLoad : data

    }
}

export const clearCart=()=>{
    return{ 
        type: Clear_Cart,
    }
}