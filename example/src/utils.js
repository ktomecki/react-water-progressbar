import React from 'react'

import { Container, Card, Form } from 'react-bootstrap'


export function Example({ title, description, children }) {
  return (
    <Card style={{ marginTop: 50 }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {children}
      </Card.Body>
    </Card>
  )
}
