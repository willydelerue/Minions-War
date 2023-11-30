import actionTypes from "../actions/actionTypes";


const initialState = {
    history: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE:
            console.log('Stocké !');
            return {
                history: state.history.concat({
                    id: Date.now(),
                    value: action.value
                })               
            }         
    
        default:
            return state
    }
};

export default reducer;