import React, { useState } from 'react'
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { styled } from '@mui/styles'
const FormButtonEdit = styled(Button)({
  padding: '30px 5px',
  borderRadius: '0px 4px 0px 0px',
})
const FormButtonRemove = styled(Button)({
  padding: '30px 3px',
  borderRadius: '0px 0px 4px 0px',
})
export default function GradeCard({ addGrade }) {
  const [gradeName, setGradeName] = useState('')
  const [gradePoint, setGradePoint] = useState('')
  const handleChangeName = (e) => {
    setGradeName(e.target.value)
  }
  const handleChangePoint = (e) => {
    setGradePoint(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addGrade({ gradeName, gradePoint })
      console.log(gradePoint)
      console.log(gradeName)
    } catch (err) {
      alert(err)
    }
  }
  return (
    <Card
      sx={{ minWidth: 650, maxWidth: 650, m: 1 }}
      component="form"
      onSubmit={handleSubmit}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
        spacing={4}
      >
        <Grid item xs={10}>
          <CardContent>
            <TextField
              fullWidth
              variant="outlined"
              label="Grade Title"
              onChange={handleChangeName}
            ></TextField>
          </CardContent>
          <CardContent sx={{ marginTop: -2 }}>
            <TextField
              fullWidth
              variant="outlined"
              label="Grade Detail"
              onChange={handleChangePoint}
            ></TextField>
          </CardContent>
        </Grid>
        <Grid item xs={1.5}>
          <FormButtonEdit variant="contained" type="submit">
            <EditIcon />
          </FormButtonEdit>
          <FormButtonRemove color="error" fullWidth variant="contained">
            <DeleteIcon />
          </FormButtonRemove>
        </Grid>
      </Grid>
    </Card>
  )
}
