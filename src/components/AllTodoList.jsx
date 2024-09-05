import { useSelector } from "react-redux"
import ItemTodoList from "./ItemTodoList/ItemTodoList"
import SettingTodoPanel from "./SettingTodoPanel/SettingTodoPanel"

const AllTodosList = () => {
    const todos = useSelector((state) => state.todos);

    return (
        <>
            <div className="todo-list">
                <div className="todo-item empty-todo-item">ToDo list is empty</div>
                {todos.slice(0,5).map((todo, index) => (
                    <ItemTodoList 
                        id={todo.id}
                        title={todo.title} 
                        completed={todo.completed}
                        key={todo.id}
                        visible={todo.visible}
                    />
                ))}
            </div>
            <SettingTodoPanel/>
        </>
    )
}

export default AllTodosList;