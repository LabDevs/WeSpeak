import React from 'react'
import { Form, Button } from 'react-bootstrap'

const Login = () => {
  return (
    <div>
      <Form action='/api/login' method='post'>
        <Form.Group controlId='usernameForm'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your unique username!'
            name='username'
          />
        </Form.Group>

        <Form.Group controlId='passwordForm'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter your password!'
            name='password'
          />
        </Form.Group>
        <Button type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Login
