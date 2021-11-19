import { Dialog } from '@mui/material'
import { fetchClassrooms, createClassroom } from '../../classroomsSlice'
import { useEffect } from 'react'
import Form from './Form'
import { useDispatch } from 'react-redux'

export default function CreateClass(props) {
  const { createClassDialog, setCreateClassDialog } = props
  const dispatch = useDispatch()
  const addClassroom = async ({ name, section, subject }) => {
    dispatch(
      createClassroom({ name: name, section: section, subject: subject })
    )
  }
  useEffect(() => {
    async function fetchAPI() {
      dispatch(fetchClassrooms())
    }

    fetchAPI()
    handleClose()
  }, [dispatch])
  const handleClose = () => {
    setCreateClassDialog(false)
  }
  return (
    <>
      <div>
        <Dialog open={createClassDialog} maxWidth="xs" onClose={handleClose}>
          <Form addClassroom={addClassroom} />
        </Dialog>
      </div>
    </>
  )
}
