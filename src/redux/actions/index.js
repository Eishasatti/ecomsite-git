//add item to cart
export const addCart=(product)=>{
    return{
        type:'ADDITEM',
        payload:product
    }

    
}
//for deleting itme from cart
export const delCart=(product)=>{
return {
    type:'DELITEM',
    payload:product
}
}