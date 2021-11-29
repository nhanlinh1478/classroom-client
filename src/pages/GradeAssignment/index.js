import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import {
  Card,
  Box,
  Typography,
  TextField,
  CardContent,
  List,
  ListItem,
  IconButton,
  CardHeader,
} from '@mui/material'
import Layout from 'src/Layout/Layout'
import GradeCard from './GradeCard'
import { useHistory } from 'react-router'
import { ArrowBackIosNew } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { arrangeGrade, updateGrades } from 'src/redux/gradeSlice'

const GradeAssignment = () => {
  const classroomGrades = useSelector((state) => state.grades)
  const [listgrade, setListgrade] = useState(classroomGrades.grades)
  const history = useHistory()
  const dispatch = useDispatch()
  const handleOnDragEnd = (result) => {
    if (!result.destination) return
    const item = Array.from(listgrade)
    const [reorderedItem] = item.splice(result.source.index, 1)
    item.splice(result.destination.index, 0, reorderedItem)
    setListgrade(item)
    dispatch(
      arrangeGrade({
        id1: listgrade[result.source.index].id,
        id2: listgrade[result.destination.index].id,
        classroomId: classroomGrades.classroomId,
      })
    )
  }
  const goBack = () => {
    history.goBack()
  }
  return (
    <Layout>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Card sx={{ minWidth: 650 }}>
          <CardHeader
            avatar={
              <IconButton onClick={goBack}>
                <ArrowBackIosNew />
              </IconButton>
            }
            title={<Typography variant="h3">Grade Structure</Typography>}
          />
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Edit your grade Structure
            </Typography>
          </CardContent>
        </Card>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="GradeCard">
            {(provided) => (
              <List
                className="GradeCard"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {listgrade.map((grades, index) => (
                  <Draggable
                    key={grades.id}
                    draggableId={grades.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <ListItem
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <GradeCard grade={grades} />
                      </ListItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </List>
            )}
          </Droppable>
        </DragDropContext>
      </Box>
    </Layout>
  )
}
export default GradeAssignment
