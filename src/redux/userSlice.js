import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axiosClient from '../axiosClient'

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const response = await axiosClient.get('/api/user')
  return response.data
})
export const updateUser = createAsyncThunk('users/updateUser', async (User) => {
<<<<<<< HEAD
  const response = await axiosClient.put('api/user', User)
=======
  const response = await axiosClient.put('/api/user', User)
>>>>>>> 5083ada360cd6f56e7fcab9786b83000f45c4230
  return response.data
})

const initialState = {
<<<<<<< HEAD
  user: [],
=======
  user: {},
>>>>>>> 5083ada360cd6f56e7fcab9786b83000f45c4230
  isLogged: false,
  message: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
<<<<<<< HEAD
    userLogin: (state) => {
      state.isLogged = true
=======
    userLogin: (state, action) => {
      state.isLogged = true
      state.user = action.payload
>>>>>>> 5083ada360cd6f56e7fcab9786b83000f45c4230
    },
    userLogout: (state) => {
      state.user = undefined
      state.isLogged = false
    },
  },
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      state.user = action.payload
    },
    [updateUser.fulfilled]: (state, action) => {
      state.user = action.payload.user
      state.message = action.payload.message
    },
  },
})

const { actions, reducer } = userSlice

export const { userLogin, userLogout } = actions

export default reducer
