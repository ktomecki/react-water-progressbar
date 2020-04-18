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

function PasswordExample() {
  const [value, setValue] = React.useState("")
  const isLength = React.useMemo(() => value.length > 10, [value])
  const isbigAndSmall = React.useMemo(() => (/[a-z]/.test(value)) && (/[A-Z]/.test(value)), [value])
  const isSpecial = React.useMemo(() =>  (/[!@#$%^&*(),.?":{}|<>]/.test(value)), [value])
  const isNumber = React.useMemo(() => (/[0-9]/.test(value)), [value])

  const sum = (isLength + isbigAndSmall + isSpecial + isNumber)
  const points = sum / 4.0 * 100
  const icon = [
    "👎",
    "🙏",
    "👌",
    "💪",
    "🔥"
  ][sum]

  return (
    <Example>
      <Form.Control type="text" value={value} onChange={e => setValue(e.target.value)}/>
      {points}
      <Loader
        percent={points}
        text={icon}
        items={[
          {done: isLength, component: "Length > 10"},
          {done: isbigAndSmall, component: "Contains Upper and Lowercase"},
          {done: isSpecial, component: "Contains special chars"},
          {done: isNumber, component: "Contains numeric chars"},
        ]}
      />
    </Example>
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
          items={[
            {done: value > 15, component: "Example 1"},
            {done: value > 30, component: "Example 2"},
            {done: value > 45, component: "Example 3"},
            {done: value > 60, component: "Example 4"},
            {done: value > 75, component: "Example 5, Example 5, Example 5, Example 5"},
            {done: value > 90, component: "Example 6"},
            {done: value >= 100, component: "Example 7"},
          ]}
        />
        asdasd
        <br/>
        <div style={{height: 120, fontSize: 50, backgroundColor: 'green'}}>
          
        </div>
      </Example>

      <PasswordExample/>

    </Container>

  )
}
