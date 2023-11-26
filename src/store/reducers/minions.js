import actionTypes from '../action';

const initialState = {
    minions : 0
};
 
    // CREATE_MINION
    // DESTROY_MINION
    // CREATE_TEAM
    // DESTROY_TEAM

    const reducer = (state = initialState, action) => {
    
        //Actions
        switch (action.type) {
            case actionTypes.CREATE_MINION :
                return {
                minions : state.minions +1
                }
                case actionTypes.DESTROY_MINION :
                    return {
                    minions : state.minions -1
                    }
                    case actionTypes.CREATE_TEAM :
                        return {
                        minions : state.minions + action.value
                        }
                        case actionTypes.DESTROY_TEAM:
                            return {
                            minions : state.minions - action.value
                            }

        
            default:
                return state;
    } 
};

export default reducer;