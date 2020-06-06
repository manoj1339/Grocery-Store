
var initial_state = [];

if(sessionStorage.getItem('cart') === null)
{
    initial_state = [];
}
else
{
    initial_state = JSON.parse(sessionStorage.getItem('cart'));
}

const cartReducer = (state = initial_state, action) => {

    switch(action.type)
    {
        case 'ADD_ITEM_TO_CART':
            var isPresent = false;
            for(let i=0; i<state.length; i++)
            {
                if(state[i].ProductID === action.payload.ProductID)
                {
                    alert(action.payload.ProductName + " is already added in the cart");
                    isPresent = true;
                }
            }
            if(!isPresent)
            {
                state.push(action.payload);
            }
            sessionStorage.setItem('cart',JSON.stringify(state));
            return state;

        case 'INCREMENT':
            const data = state.map(item => {
                if(item.ProductID === action.payload)
                {
                    item.quantity += 1;
                }
                return item;
            });
            sessionStorage.setItem('cart',JSON.stringify(data));
            return data;


        case 'DECREMENT':
            const new_data = state.map(item => {
                if(item.ProductID === action.payload)
                {
                    if(item.quantity > 1){
                        item.quantity -= 1;
                    }
                }
                return item;
            });
            sessionStorage.setItem('cart',JSON.stringify(new_data));
            return new_data;

        case 'DELETE_CART_PRODUCT':
            const new_state = state.filter((item) => {
                return item.ProductID !== action.payload;
            });
            sessionStorage.setItem('cart',JSON.stringify(new_state));
            return new_state;

        default:
            return state;

    }
}

export default cartReducer;