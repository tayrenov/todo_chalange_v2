import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../../redux/todoSlice";
import { useState } from "react";
import "./ItemTodoList.css"

const ItemTodoList = (props) => {
    const [isChecked, setIsChecked] = useState(props.completed);

    const dispatch = useDispatch();

    const changeCompletedClick = () => {
        dispatch(toggleComplete({id: props.id, completed: !isChecked}))
        setIsChecked(!isChecked)
    }

    const deleteTodoClick = () => {
        dispatch(deleteTodo({id: props.id}))
    }
    return (
        <div className={props.visible?'todo-item':'todo-item hide-item'}>
            <div className={isChecked ? 'add-todo_completed active' : 'add-todo_completed'} onClick={changeCompletedClick}></div>
            <span>{props.title}</span>
            <span>{props.visible}</span>
            <input type="submit" value='' onClick={deleteTodoClick}/>
        </div>
    )
}

export default ItemTodoList;