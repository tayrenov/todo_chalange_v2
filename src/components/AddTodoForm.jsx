import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, sortAll } from "../redux/todoSlice";

const AddTodoForm = () => {

    const [value, setValue] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const changeCompletedClick = () => {
        console.log('changeCompletedClick')
        setIsChecked(!isChecked)
    }

    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault();
        /* Validation form :) */
        if (value==="" || value===" ") return
        /**********************/
        console.log('Submit form');
        dispatch(
            addTodo({
                title:value,
                completed:isChecked
            })
        )
        resetForm()
    }

    const resetForm = () => {
        dispatch(sortAll())
        setValue("")
        setIsChecked(false)
    }

    const inputHandler = (e) => {
        setValue(e.target.value)
    }

    return (
        <form onSubmit={submitForm}>
            <div className={isChecked ? 'add-todo_completed active' : 'add-todo_completed'} onClick={changeCompletedClick}></div>
            <input type="text" value={value} onChange={inputHandler}/>
            <input type="submit" value="submit"/>
        </form>
    )
}

export default AddTodoForm;