import { Add_To_Cart,Clear_Cart } from "../constants";
export const addToCart=(data)=>{
    return{ 
        type: Add_To_Cart,
        payLoad : data

    }
}

export const clearCart=()=>{
    return{ 
        type: Clear_Cart,
    }
}