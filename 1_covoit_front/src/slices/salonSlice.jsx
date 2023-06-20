import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  infos: {},
}

export const salonSlice = createSlice({
    name : "salon",
    initialState,
    reducers: {
        loadSalon: (state, action) =>{
            state.infos = action.payload
        }
    }

})

export const {loadSalon} = salonSlice.actions

export const selectSalon = state => state.salon

export default salonSlice.reducer