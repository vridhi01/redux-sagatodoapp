import React,{useState,useEffect} from 'react';
import {addTodosuccess,deleteTodosuccess,editTodosuccess,getTodoStart} from '../action/index';
import {useDispatch, useSelector} from "react-redux";
import './todo.css';


function Todo() {
  const [addstate, addsetstate] = useState('');
 const [isEditItem , setIsEditItem] = useState(null);
 const [ediTodo, seteditTodo] = useState(true);
 const dispatch = useDispatch();

 
 const Liststates = useSelector(state => state.todoReducers.data);
 console.log(Liststates);
  useEffect(() => {
    dispatch(getTodoStart());
   } ,[dispatch]);

  const ondeleteList = (id) => {
    console.log(id,'id');
    dispatch(deleteTodosuccess(id));
    dispatch(getTodoStart());
  }

  const onaddList = (data) => {
    dispatch(addTodosuccess(data));
    addsetstate('');
    dispatch(getTodoStart());
  }

  const oneditList = (id,data) => {
        addsetstate(data);
        seteditTodo(false);
        setIsEditItem(id);
  }

  const edittodo = (data) => {
    dispatch(editTodosuccess({data,isEditItem}));
    addsetstate('');
    seteditTodo(true);
    dispatch(getTodoStart());
  }

  return (
    <div className="page-content page-container" id="page-content">
    <div className="padding">
        <div className="row container d-flex justify-content-center">
            <div className="col-md-12">
                <div className="card px-3">
                    <div className="card-body">
                        <h4 className="card-title">Todo list</h4>
                        <div className="add-items d-flex"> 
                            <input type="text" 
                            className="form-control todo-list-input" 
                            value={addstate}
                            placeholder="What do you need to do today?"
                            onChange ={(e)=> addsetstate(e.target.value)} 
                            /> 
                            {
                              ediTodo ? <button className="add btn btn-primary font-weight-bold todo-list-add-btn" onClick={()=>{onaddList(addstate)}} >Add</button>
                              :  <button className="add btn btn-primary font-weight-bold todo-list-add-btn" onClick={()=>{edittodo(addstate)}}>Edit</button>  
                            }
                        </div>
                        <div className="list-wrapper">
                            <ul className="d-flex flex-column todo-list">
                                  {
                                    Liststates ?  Object.keys(Liststates).map((id,key)=>{ 
                                        return (
                                              <li key={key}>
                                                  <div className="form-check">
                                                  <label className="form-check-label"> 
                                                        <input className="checkbox" type="checkbox"/>{Liststates[id].state} 
                                                        <i className="input-helper"></i>
                                                      </label> 
                                                  </div> 
                                                  <div className="buttons">
                                                      <i className="fa fa-edit" onClick={() => { oneditList(id,Liststates[id].state) }}></i>
                                                      <i className="remove mdi mdi-close-circle-outline"  onClick={() => { ondeleteList(id) }}></i>
                                                      {/* <i className="fa fa-edit" onClick={()=>{editTodo(elem.id)}}></i>
                                                      <i className="remove mdi mdi-close-circle-outline" onClick={() => {dispatch(deleteTodo(elem.id))}}></i> */}
                                                  </div>
                                              </li>
                                          )}) : ''
                                 }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Todo
