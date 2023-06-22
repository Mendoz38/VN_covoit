import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  infos: {},
  urlOk: false,
}

export const salonSlice = createSlice({
    name : "salon",
    initialState,
    reducers: {
        loadURL: (state, action) => {
            state.infos = action.payload;
            state.urlOk = true;
        }
    }

})

export const {loadURL} = salonSlice.actions

export const selectSalon = (state) => state.salon

export default salonSlice.reducer