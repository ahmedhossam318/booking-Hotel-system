import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let url = "http://localhost:5000/api/rooms/";

export const getAllRooms = createAsyncThunk(
	"room/getAllRooms",
	async (_, thunkApi) => {
		const { rejectWithValue } = thunkApi;
		try {
			const result = await axios.get(url + "getallrooms");
			const rooms = result.data;
			return rooms;
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);
export const getRoomById = createAsyncThunk(
	"room/getRoomById",
	async (id, thunkApi) => {
		const { rejectWithValue } = thunkApi;
		try {
			const room = (await axios.post(url + "getroombyid", { id: id })).data;
			return room;
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);

const roomSlice = createSlice({
	name: "rooms",
	initialState: { rooms: [], isLoading: false, error: null },
	extraReducers: {
		// get all rooms
		[getAllRooms.pending]: (state, action) => {
			state.isLoading = true;
			state.error = null;
			// console.log(action.payload);
		},
		[getAllRooms.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.rooms = action.payload;
			// console.log(action.payload);
		},
		[getAllRooms.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
			// console.log(action.payload);
		}, // get  room by id
		[getRoomById.pending]: (state, action) => {
			state.isLoading = true;
			state.error = null;
			// console.log(action.payload);
		},
		[getRoomById.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.rooms = action.payload;
			// console.log(action.payload);
			// console.log(state.rooms);
		},
		[getRoomById.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
			// console.log(action.payload);
		},
	},
});
export default roomSlice.reducer;
