import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getLoggedInUser = createAsyncThunk(
    "User/getLoggedInUserRedux",
    async(_, { rejectWithValue })=>{
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/me`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('_at')}`,
                },
            });
            if (!response.ok) throw new Error("Failed to fetch user data");
            const data = await response.json();
            return data.result; 
        } catch (exception) {
            console.error(exception);
            return rejectWithValue(exception.message);
        }
    }
)

const UserSlicer = createSlice({
    name:'User',
    initialState:{
        loggedInUser:null,
        userLoading: true,
    },
    reducers:{
        setLoggedInUser:(state,action)=>{
            state.loggedInUser = action.payload
            state.userLoading = false
        },
        logoutUser: (state) => {
            state.loggedInUser = null; 
            state.userLoading = false;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getLoggedInUser.pending,(state)=>{
            state.userLoading = true
        })
        builder.addCase(getLoggedInUser.fulfilled,(state,action)=>{
            state.loggedInUser = action.payload
            state.userLoading = false
        })
        builder.addCase(getLoggedInUser.rejected,(state)=>{
            state.loggedInUser = null
            state.userLoading = false
        })
    }
})

export const {setLoggedInUser, logoutUser} = UserSlicer.actions;

export default UserSlicer.reducer;