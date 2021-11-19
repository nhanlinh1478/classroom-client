import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import axiosClient from '../../axiosClient'
import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Link } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import {
  Card,
  Typography,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Container,
  CardHeader,
  IconButton,
  Grid,
} from '@mui/material'

const MyContainer = styled(Container)({
  marginLeft: '90px',
  marginTop: '30px',
})
const MyCard = styled(Card)({
  color: 'black',
})
const LinkCard = styled(Card)({
  maxWidth: 300,
  marginTop: 30,
})
const MyCardActions = styled(CardActions)({
  marginLeft: '950px',
})
const WorkCard = styled(Card)({
  marginTop: 30,
  marginLeft: 0,
})
function DetailClassroom() {
  const [classroom, setClassroom] = useState('')
  const [copyLink, setCopyLink] = useState(false)

  let { id } = useParams()
  useEffect(() => {
    async function fetchData() {
      const results = await axiosClient.get(`/api/classrooms/${id}`)
      console.log(results.data)

      setClassroom(results.data)
    }

    fetchData()
  }, [])
  const handleCopyLink = () => {
    console.log(copyLink)
  }
  return (
    <Layout>
      <MyContainer>
        <MyCard>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="https://picsum.photos/200/300"
          />
          <CardContent>
            <Typography gutterBottom variant="h2" component="div" color="#a32">
              {classroom.name}
            </Typography>
            <Typography variant="h3" color="text.secondary">
              {classroom.section}
            </Typography>
          </CardContent>
          <MyCardActions>
            <Button
              size="medium"
              component={Link}
              to={`/classrooms/${id}/user-list`}
            >
              list user
            </Button>
            <Button size="small">learn more</Button>
          </MyCardActions>
        </MyCard>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <LinkCard>
              <CardContent>
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Class code"
                >
                  <MoreVertIcon sx={{ mt: 3 }} />
                </CardHeader>
                <Typography variant="h2" color="text.secondary">
                  {classroom.id}
                </Typography>
              </CardContent>
              <CardActions>
                <CopyToClipboard
                  text={classroom.id}
                  onCopy={() => setCopyLink(true)}
                >
                  <Button size="large">copy link</Button>
                </CopyToClipboard>
              </CardActions>
            </LinkCard>
          </Grid>
          <Grid item xs={9}>
            <WorkCard>
              <Typography gutterBottom variant="h5" component="div">
                Announce something to your class
              </Typography>
              <CardActions>
                <Button size="small">cancel</Button>
                <Button size="small">post</Button>
              </CardActions>
            </WorkCard>
          </Grid>
        </Grid>
      </MyContainer>
    </Layout>
  )
}

export default DetailClassroom
