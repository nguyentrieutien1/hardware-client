import { createSlice } from '@reduxjs/toolkit'
import { getItemFromLocalStorage } from '../helpers'

export interface CartState {
  value: []
}

const initialState: CartState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    updateQuantity: (state, { payload }) => {
      state.value = payload
    },
    setInitCart: (state, { payload }) => {

      state.value = payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateQuantity, setInitCart } = cartSlice.actions

export default cartSlice.reducer