import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Home = () => {

  const [classrooms, setClassrooms] = useState([])

  useEffect(() => {
    async function fetchAPI() {
      const result = await axios.get('http://localhost:5000/api/classrooms')
      .catch(err => {
        console.error(err)
      })
      setClassrooms(prevState => [...prevState, ...result.data])
    }
    fetchAPI()
  },[])

  return (
    <div>
      {classrooms.map(classroom => <div>{classroom.name}</div>)}
    </div>
  )
}

export default Home