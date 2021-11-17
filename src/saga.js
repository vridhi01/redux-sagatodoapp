import {takeLatest,all,put,fork} from 'redux-saga/effects';
import {editTodoFail,editTodoStart,deleteTodoStart,addTodoFail,addTodoStart,deleteTodoFail,getTodoFail,getTodoSuccess} from './action/index';
import * as types from './action/actionTypes';
import firebaseDb from './firebase_config';

function* onLoadListAsync()
{
    try{
        const todosss = yield new Promise(resolve => firebaseDb.on("value", resolve))
        if(todosss.val()){           
            yield put(getTodoSuccess(todosss.val()));
        }else{
            yield put(getTodoSuccess({}));
        }
    }catch(error){
       yield put(getTodoFail());
    }
}

function* ondeleteListAsync({payload})
{    
    console.log(payload,'payload');
    try{
        const todoRefs = firebaseDb.child(payload);
        yield todoRefs.remove();
        yield put(deleteTodoStart());
    }catch(error){
       yield put(deleteTodoFail());
    }

}

function* onaddListAsync({payload})
{
    const todo = {
        state: payload ,
        complete:false,
    }; 
    try{
        yield firebaseDb.push(todo);
        yield put(addTodoStart());
    }catch(error){
       yield put(addTodoFail());
    }
}

function* oneditListAsync({payload:{data:state,isEditItem}})
{
    const todoRefs = firebaseDb.child(isEditItem);
    
   
    try{
        yield todoRefs.update({
            state : state
          });
        yield put(editTodoStart());
    }catch(error){
       yield put(editTodoFail());
    }
}

export function* onLoadList()
{
    yield takeLatest(types.TODO_START,onLoadListAsync)
}

export function* ondeleteList()
{
    yield takeLatest(types.DELETE_TODO_SUCCESS ,ondeleteListAsync)
}

export function* onaddList()
{
    yield takeLatest(types.ADD_TODO_SUCCESS ,onaddListAsync)
}
export function* oneditList()
{
    yield takeLatest(types.EDIT_TODO_SUCCESS ,oneditListAsync)
}
const listSaga = [fork(onLoadList) , fork(ondeleteList) , fork(onaddList) , fork(oneditList)];

export default function* rootSaga() {
    yield all ([...listSaga]);
}