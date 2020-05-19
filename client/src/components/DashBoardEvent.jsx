import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import UpdateEvent from './UpdateEvent'

const DashBoardEvent = props => {
  const [show, setShow] = useState(false)

  const removeEvent = () => {
    fetch('/remove', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ eventId: props.event.id })
    })
      .then(() => {
        window.location.reload()
      })
      .catch(err => {
        console.log(err)
      })
  }
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <UpdateEvent
        show={show}
        handleClose={handleClose}
        eventId={props.event.id}
      />
      <Card className='text-center eventCard'>
        <Card.Body>
          <Card.Title>{props.event.title}</Card.Title>
          <Card.Text>{props.event.description}</Card.Text>
          <Card.Title>{props.event.category}</Card.Title>
          <Card.Title>{new Date(props.event.date).toLocaleString()}</Card.Title>
          <Button onClick={handleShow}>Update Event</Button>
          <Button onClick={removeEvent}>Delete Event</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default DashBoardEvent
