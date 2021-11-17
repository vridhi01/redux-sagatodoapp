import * as types from '../action/actionTypes'

const initialState = {
    data : [],
    error : null,
    loading : false,
};

function todoReducers(state=initialState,action) {
    switch (action.type)
    {
        case types.TODO_START :
        case types.DELETE_TODO_START :
        case types.ADD_TODO_START :
        case types.EDIT_TODO_START :
            return {
                ...state,
                loading:true
            };

        case types.TODO_SUCCESS:
            return {
                ...state,
                data:action.payload,
                loading:true,
            };
        case types.DELETE_TODO_SUCCESS:
        case types.EDIT_TODO_SUCCESS:
        case types.ADD_TODO_SUCCESS:
            return {
                ...state,
                loading:false,
            };
      
        case types.TODO_FAIL:
        case types.DELETE_TODO_FAIL:
        case types.EDIT_TODO_FAIL:
        case types.ADD_TODO_FAIL:
            return {
                ...state,
                error:action.payload,
                loading:false,
            };
        default:return state;
    }
}

export default todoReducers
