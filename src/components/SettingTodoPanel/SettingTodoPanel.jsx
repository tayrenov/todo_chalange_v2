import { useDispatch, useSelector } from "react-redux"
import "./SettingTodoPanel.css"
import { useState } from "react"
import { sortAll, sortComplited, sortActive, clearTodos } from "../../redux/todoSlice"

const SettingTodoPanel = (props) => {

    const [sortValue, sortType] = useState('all')
    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todos);

    var itemsLeft = 0;
    var leftTodo = todos.filter((todo) => todo.visible === true)

    console.log(leftTodo.length)
    if (leftTodo.length >= 5) {
        itemsLeft = leftTodo.length - 5;
    }

    const changeSortClick = (e) => {
        console.log(e.target.dataset.type)
        sortType(e.target.dataset.type)

        switch (e.target.dataset.type) {
            case 'all':
                console.log('sortALL')
                dispatch(sortAll())
                break;
            case 'active':
                console.log('active')
                dispatch(sortActive())
                break;
            case 'complited':
                console.log('complited')
                dispatch(sortComplited())
                break;
            default:
                dispatch(sortComplited())
        }
    }

    const clearTodosClick = (e) => {
        console.log('clearTodos')
        dispatch(clearTodos())
    }

    return (
        <div className="settingTodoPanel">
            <span>{itemsLeft} items left</span>  

            <div className="settingTodoPanel_sort">
                <span className={(sortValue==='all') ? 'active': ''} onClick={changeSortClick} data-type='all'>All</span>
                <span className={(sortValue==='active') ? 'active': ''} onClick={changeSortClick} data-type='active'>Active</span>
                <span className={(sortValue==='complited') ? 'active': ''} onClick={changeSortClick} data-type='complited'>Complited</span>
            </div>

            <span className="settingTodoPanel_clear-all" onClick={clearTodosClick}>Clear Complited</span>

        </div>
    )
}

export default SettingTodoPanel;