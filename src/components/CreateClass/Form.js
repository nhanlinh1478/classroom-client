import { Button, TextField, Typography, Box } from '@mui/material'
import React from 'react'
import * as Yup from 'yup'
import { useSnackbar } from 'notistack'
import { useFormik, FormikProvider } from 'formik'
import get from 'lodash/get'
import { useState } from 'react'
const styleBtn = {
  alignItem: 'center',
  marginLeft: '150px',
  marginBottom: '15px',
}
export default function Form({ addClassroom }) {
  const { enqueueSnackbar } = useSnackbar()

  const createClassSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'too long')
      .required('class name is required'),
    section: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'too long')
      .required('section is required'),
    subject: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'too long')
      .required('subject is required'),
  })
  const formik = useFormik({
    initialValues: {
      name: '',
      section: '',
      subject: '',
    },
    validationSchema: createClassSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await addClassroom({ ...values })
        enqueueSnackbar('Create classroom Success.', { variant: 'success' })
        resetForm()
      } catch (error) {
        enqueueSnackbar(
          get(error, 'response.data.message', 'Error when create account'),
          { variant: 'error' }
        )
      }
    },
  })
  const { handleSubmit, getFieldProps, touched, errors } = formik
  return (
    <FormikProvider value={formik}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 3, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div>
          <Typography variant="h5" color="secondary" align="center">
            Create Classroom
          </Typography>
          <TextField
            label="Class name"
            variant="outlined"
            color="secondary"
            fullWidth
            {...getFieldProps('name')}
            error={Boolean(touched.name && errors.name)}
            helperText={touched.name && errors.name}
          />
          <TextField
            label="Section"
            variant="outlined"
            color="secondary"
            fullWidth
            {...getFieldProps('section')}
            error={Boolean(touched.section && errors.section)}
            helperText={touched.section && errors.section}
          ></TextField>
          <TextField
            label="Subject"
            variant="outlined"
            color="secondary"
            fullWidth
            {...getFieldProps('subject')}
            error={Boolean(touched.subject && errors.subject)}
            helperText={touched.subject && errors.subject}
          ></TextField>
        </div>
        <div style={styleBtn}>
          <Button color="secondary" variant="outlined" type="submit">
            Create class
          </Button>
        </div>
      </Box>
    </FormikProvider>
  )
}
