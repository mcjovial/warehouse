import { BasedApiUrl } from './../api/BaseUrl'
import { localStorageHandler } from '../utils/local-storage-handlers'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

const { getTokenLocalStorage } = localStorageHandler()

const data = getTokenLocalStorage()

const userData = data && JSON.parse(data)

export interface WarehouseCreationState {
  message: string
  error: string
  pending: boolean
}

const initialState: WarehouseCreationState = {
  message: '',
  error: '',
  pending: false,
}

const postWarehouse = createAsyncThunk('warehouses/create', async (data: any, thunkAPI) => {
  try {
    const response = await axios({
      method: 'post',
      url: `${BasedApiUrl}/warehouses/create`,
      headers: {
        Authorization: `Bearer ${userData?.token}`,
      },
      data,
    })
    return response.data
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response.data)
  }
})

export const warehouseCreationSlice = createSlice({
  name: 'warehousePosting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postWarehouse.pending, (state) => {
        state.pending = true
      })
      .addCase(postWarehouse.fulfilled, (state, action) => {
        return (state = {
          message: action.payload.message,
          error: '',
          pending: false,
        })
      })
      .addCase(postWarehouse.rejected, (state, action: PayloadAction<any>) => {

        state.error = action.payload.error
        state.pending = false
      })
  },
})

export { postWarehouse }

export default warehouseCreationSlice.reducer
