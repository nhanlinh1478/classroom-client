import { Dialog } from '@mui/material'

import { useLocalContext } from '../../context/context'
import Form from './Form'

const CreateClass = () => {
  // eslint-disable-next-line no-unused-vars
  const { createClassDialog, setCreateClassDialog } = useLocalContext()

  return (
    <>
      <div>
        <Dialog
          onClose={() => setCreateClassDialog(false)}
          open={createClassDialog}
          maxWidth="xs"
        >
          <Form />
        </Dialog>
      </div>
    </>
  )
}

export default CreateClass
