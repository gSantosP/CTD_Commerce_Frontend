export default function cartReducer(state, action){
    switch(action.type){
        case 'SAVE_PRODUCT':{
            const newState = [];
            if(state.length > 0){
                state.forEach((product) => {
                    if(product.id !== action.payload.id){
                        newState.push(product);
                    }else{
                        newState.push(action.payload)
                    }
                });
                return newState
            }
            newState.push(action.payload)
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