import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { BasedApiUrl } from '../api/BaseUrl'

export interface UserLogoutState {
    message: string
    error: string
    pending: boolean
}

const initialState: UserLogoutState = {
    message: '',
    error: '',
    pending: false
}

const logoutUser = createAsyncThunk('users/logout', async (token: string, thunkAPI) => {
    try {
        const response = await axios({
            method: 'post',
            url: `${BasedApiUrl}/users/logout`,
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        return response.data
    } catch (err: any) {
        return thunkAPI.rejectWithValue(err.response.data)
    }
})

export const UserLogoutSlice = createSlice({
    name: 'userLogout',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(logoutUser.pending, (state) => {
                state.pending = true
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                return (state = {
                    message: action.payload.message,
                    error: '',
                    pending: false
                });
            })
            .addCase(logoutUser.rejected, (state, action: PayloadAction<any>) => {
                state.pending = true
                state.error = action.payload.error
            })
    },
})

export { logoutUser }

export default UserLogoutSlice.reducer
