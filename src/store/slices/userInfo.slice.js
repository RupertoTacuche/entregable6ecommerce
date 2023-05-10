import { createSlice } from '@reduxjs/toolkit'
import { axiosEcommerce } from '../../utils/configAxios'

const initialState = {
token: '',
user: null
}

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: JSON.parse(localStorage.getItem('userInfo')) ?? initialState,
  reducers: {
    setUser: (state, action) => {
        const newState = {...state, ...action.payload}
         localStorage.setItem('userInfo', JSON.stringify(newState))
        return newState
    },
    logOut: (state) => {
        const newState = {...state, ...initialState}
         localStorage.setItem('userInfo', JSON.stringify(newState))        
        return newState
    }
  },
})


export const { setUser, logOut} = userInfoSlice.actions

export const loginUser = (values) => (dispatch) => {
    axiosEcommerce.post('users/login', values)
    .then(res => {

        dispatch(setUser(res.data))
    })
    .catch(err => console.log(err))
}


export default userInfoSlice.reducer