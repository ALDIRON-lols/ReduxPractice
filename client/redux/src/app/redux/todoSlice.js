const { createSlice, nanoid, current } = require("@reduxjs/toolkit");


const initialState = {
    todo: []
};

const Slice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const data ={
                id: nanoid(),
                name: action.payload 
            }
            state.todo.push(data);
            console.log(current(state.todo))
        }
    }
})

export const {addTodo} = Slice.actions;
export default Slice.reducer;