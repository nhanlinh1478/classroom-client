import { Grid } from '@mui/material'
import ClassroomCard from '../classroom/ClassroomCard'

import Layout from '../Layout'
import { useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
const Home = () => {
  const classrooms = useSelector((state) => state.classrooms.classrooms)
  const history = useHistory()
  return (
    <div>
      <Layout>
        <Grid container sx={{ alignItems: 'center' }}>
          {classrooms.map((classroom) => (
            <ClassroomCard key={classroom.id} classroom={classroom} />
          ))}
        </Grid>
      </Layout>
    </div>
  )
}

export default Home
