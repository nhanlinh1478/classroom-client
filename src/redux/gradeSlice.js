import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axiosClient from '../axiosClient'
export const fetchGrades = createAsyncThunk('/grades/getGrade', async () => {
  const response = await axiosClient.get('/api/grades')
  return response
})
export const createGrade = createAsyncThunk(
  '/grades/createGrade',
  async (grade) => {
    const response = await axiosClient.post('/api/grades', grade)
    return response
  }
)
const initialState = {
  grades: [],
}
const gradesSlice = createSlice({
  name: 'grades',
  initialState,
  reducers: {
    addGrade: (state, action) => {
      state.push(action.payload)
    },
  },
})
const { reducers, actions } = gradesSlice
export const { addGrade } = actions
export default reducers
