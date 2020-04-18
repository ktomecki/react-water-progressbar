import React from 'react'

import Loader from 'react-water-progressbar'
import { Container, Card, Form } from 'react-bootstrap'


function Example({ title, description, children }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {children}
      </Card.Body>
    </Card>
  )
}

export default function App() {
  const [value, setValue] = React.useState(50)

  return (
    <Container style={{ maxWidth: 800, marginTop: 50 }}>
      <Example>

        <Form>
          <Form.Group controlId="formBasicRange">
            <Form.Label>Range</Form.Label>
            <Form.Control type="range" value={value} onChange={e => setValue(e.target.value)}/>
          </Form.Group>
        </Form>
        <Loader
          percent={value}
          text={`${value} %`}
        />
      </Example>

    </Container>

  )
}
