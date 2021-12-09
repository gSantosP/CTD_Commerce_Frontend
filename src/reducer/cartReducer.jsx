export default function cartReducer(state, action){
    switch(action.type){
        case 'SAVE_PRODUCT':{
            const newState = [...state];
            const indexOf = newState.indexOf(action.payload);
            if(indexOf >= 0){
                newState[indexOf] = action.payload;
            } else {
                newState.push(action.payload);
            }
            return newState;
        }

        case 'REMOVE_PRODUCT':{
            const newState = [];
            state.forEach((product) => {
                if(product.id !== action.payload.id){
                    newState.push(product);
                }
            });
            return newState;
        }

        case 'CLEAR':{
            state = [];
            return state;
        }    
        default:
            return state;
    }
}