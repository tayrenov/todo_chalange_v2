import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        {id:1, title:'Title1', completed:true, visible:true},
        {id:2, title:'Title2', completed:false, visible:true},
        {id:3, title:'Title3', completed:true, visible:true},
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: action.payload.completed,
                visible: action.payload.completed
            };
            state.unshift(newTodo);
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
            console.log('deleteTodo')
            return state.filter((todo) => todo.id !== action.payload.id)
        },
        sortAll: (state) => {
            console.log('storeSoRTALL')
            for (var i=0; i<state.length; i++) {
                state[i].visible= true;
            }
        },
        sortComplited: (state) => {
            console.log('storeSortComplited')
            for (var i=0; i<state.length; i++) {
                if (state[i].completed === true) 
                    {state[i].visible = true} 
                    else {state[i].visible = false}
            }
        },
        sortActive: (state) => {
            console.log('storeSortActive')
            for (var i=0; i<state.length; i++) {
                if (state[i].completed === false) 
                    {state[i].visible = true} 
                    else {state[i].visible = false}
            }
        },
        clearTodos: (state) => {
            console.log('StorageClearAll')
            state.splice(0,state.length);
        }
    }
})

export const { addTodo, toggleComplete, deleteTodo, sortComplited, sortAll, sortActive, clearTodos } = todoSlice.actions;

export default todoSlice.reducer;