import { configureStore } from '@reduxjs/toolkit'
import classroomsReducer from './redux/classroomsSlice'
import userReducer from './redux/userSlice'
import gradeReducer from './redux/gradeSlice'
export const store = configureStore(
  {
    reducer: {
      classrooms: classroomsReducer,
      user: userReducer,
      grade: gradeReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
