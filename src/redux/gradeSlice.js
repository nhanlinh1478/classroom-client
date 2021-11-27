import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axiosClient from '../axiosClient'

export const fetchGrades = createAsyncThunk(
  'classrooms/fetchGrades',
  async () => {
    const response = await axiosClient.get('api/grades')
    return response.data
  }
)

export const addGrade = createAsyncThunk(
  'classrooms/addGrade',
  async (classroom) => {
    const response = await axiosClient.post('api/grades', classroom)
    return response.data
  }
)
const initialState = {
  grades: [],
  classroomId: '',
}

const classroomsSlice = createSlice({
  name: 'classrooms',
  initialState,
  reducers: {
    updateClassroomId: (state, action) => {
      state.classroomId = action.payload
    },
  },
  extraReducers: {
    [fetchGrades.fulfilled]: (state, action) => {
      state.grades = action.payload
    },
    [addGrade.fulfilled]: (state, action) => {
      state.grades = [action.payload, ...state.grades]
    },
  },
})

const { actions, reducer } = classroomsSlice

export const { updateClassroomId } = actions

export default reducer
