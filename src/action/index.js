import * as types from './actionTypes';

// show list
export const getTodoStart = () => ({
    type : types.TODO_START,
});
export const getTodoSuccess = (data) => ({
     type: types.TODO_SUCCESS,
     payload: data,
});
export const getTodoFail = (error) => ({
    type: types.TODO_FAIL,
    payload: error,
});
// delete todo
export const deleteTodoStart = () => ({
    type : types.DELETE_TODO_START,
});
export const deleteTodosuccess = (id) => ({
    type : types.DELETE_TODO_SUCCESS,
    payload : id,
});
export const deleteTodoFail = (error) => ({
    type: types.DELETE_TODO_FAIL,
    payload: error,
});
//add todo
export const addTodoStart = () => ({
    type : types.ADD_TODO_START,
});
export const addTodosuccess = (data) => ({
    type : types.ADD_TODO_SUCCESS,
    payload : data,
});
export const addTodoFail = (error) => ({
    type: types.ADD_TODO_FAIL,
    payload: error,
});

//edit todo
export const editTodoStart = () => ({
    type : types.EDIT_TODO_START,
});
export const editTodosuccess = (listDetails) => ({
    type : types.EDIT_TODO_SUCCESS,
    payload : listDetails,
});
export const editTodoFail = (error) => ({
    type: types.EDIT_TODO_FAIL,
    payload: error,
});



export const editTodoButton = (data,isEditItem) => {
    return {
        type : 'EDIT_TODO',
        payload : {
            editdata :data,
            isEditItem:isEditItem,
        }
        
    }
};




