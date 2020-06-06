export const item_increment = (id) => {
    return {
        type: 'INCREMENT',
        payload: id
    };
};

export const item_decrement = (id) => {
    return {
        type: 'DECREMENT',
        payload: id
    };
};


export const cart_product_delete = (id) => {
    return {
        type: 'DELETE_CART_PRODUCT',
        payload: id
    };
};

export const cart_product_add = (item) => {
    return {
        type: 'ADD_ITEM_TO_CART',
        payload: item
    };
};