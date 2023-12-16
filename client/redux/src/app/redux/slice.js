const {
  createSlice,
  nanoid,
  current,
  createAsyncThunk,
} = require("@reduxjs/toolkit");

const initialState = {
  userApiData: [],
  users: JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [],
  color: true,
};

export const fetchApiUsers = createAsyncThunk("fetchApiUsers", async () => {
  console.log("started.")
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  return result.json();
});

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
      const userData = JSON.stringify(current(state.users));
      console.log(current(state.users));
      localStorage.setItem("users", userData);
    },
    removeUser: (state, action) => {
      const data = state.users.filter((item) => {
        return item.id !== action.payload;
      });
      state.users = data;
      //localStorage.removeItem(`users`)
      const userData = JSON.stringify(data);
      localStorage.setItem("users", userData);
    },
    changeColor: (state, action) => {
      state.color = !action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiUsers.fulfilled, (state, action) => {
      console.log("Reached in extraReducer.");
      (state.isloading = false), (state.userApiData = action.payload);
    });
  },
});

export const { addUser, removeUser, changeColor } = Slice.actions;
export default Slice.reducer;
