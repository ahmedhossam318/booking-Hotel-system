import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let url = "http://localhost:5000/api/users/";

export const register = createAsyncThunk(
	"user/register",
	async (user, thunkApi) => {
		const { rejectWithValue } = thunkApi;
		try {
			const result = await axios.post(url + "register", user);
			const newUser = result.data;
			return newUser;
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);

export const login = createAsyncThunk("user/login", async (user, thunkApi) => {
	const { rejectWithValue } = thunkApi;
	try {
		const result = await axios.post(url + "login", user);
		const returnedUser = result.data;
		return returnedUser;
	} catch (e) {
		return rejectWithValue(e.message);
	}
});

export const userProfile = createAsyncThunk(
	"user/profile",
	async (_, thunkApi) => {
		const { rejectWithValue } = thunkApi;
		try {
			const result = await axios.get(url + "profile");
			const userProfile = result.data;
			return userProfile;
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);

const userSlice = createSlice({
	name: "users",
	initialState: { user: {}, isLoading: false, error: null },
	extraReducers: {
		// register
		[register.pending]: (state, action) => {
			state.isLoading = true;
			state.error = null;
			// console.log(action.payload);
		},
		[register.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.user = action.payload;
			// console.log(action.payload);
		},
		[register.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
			// console.log(action.payload);
		},
		// login Thunk
		[login.pending]: (state, action) => {
			state.isLoading = true;
			state.error = null;
			// console.log(action.payload);
		},
		[login.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.user = action.payload;
			// console.log(action.payload);
		},
		[login.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
			// console.log(action.payload);
		},
		// user profile  Thunk
		[userProfile.pending]: (state, action) => {
			state.isLoading = true;
			state.error = null;
			// console.log(action.payload);
		},
		[userProfile.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.user = action.payload;
			console.log(action.payload);
		},
		[userProfile.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
			// console.log(action.payload);
		},
	},
});

export default userSlice.reducer;
