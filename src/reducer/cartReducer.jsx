export default function cartReducer(state, action){
    switch(action.type){
        case 'ADD_PRODUCT':
            const checkIfProductAlreadyExists = state.filter( product => {
                return product.id === action.payload.id;
            });

            if(!checkIfProductAlreadyExists.length){
                return [...state, action.payload]
            }
            return state;

        case 'REMOVE_PRODUCT':
            const newState = [];
            state.forEach((product) => {
                if(product.id !== action.payload.id){
                    newState.push(product);
                }
            });
            return newState;

        case 'CLEAR':
            state = [];
            return state;

        default:
            return state;
    }
}