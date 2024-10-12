// Action to add item to cart
export const addCart = (product) => {
    return {
        type: 'ADDITEM',
        payload: product,
    };
};

// Action to delete item from cart
export const delCart = (product) => {
    return {
        type: 'DELITEM',
        payload: product,
    };
};

// Action to set total price
const setPrice = (total) => ({
    
        type: 'SETTOTAL',
        payload: total,

});
// If exported as default
export default setPrice;

