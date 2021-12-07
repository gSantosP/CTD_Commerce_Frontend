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
            state.forEach((product, index) => {
                if(product.id === action.payload.id){
                    state.splice(index, 1);
                }
            });
            return state;

        case 'CLEAR':
            state = [];
            return state;

        default:
            return state;
    }
}