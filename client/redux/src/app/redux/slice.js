const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  users: [],
  color: true
};

const Slice = createSlice({
  name: "SomeInitialValueforSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(data);
    },
    removeUser: (state, action) => {
      const data = state.users.filter((item) => {
        return item.id !== action.payload;
      });
      state.users = data;
    },
    changeColor: (state, action) => {
        console.log("Before"+state.color);
        state.color = !action.payload;
        console.log("After"+state.color);
    }
  },
});

export const { addUser, removeUser, changeColor } = Slice.actions;
export default Slice.reducer;
