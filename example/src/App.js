import React from 'react'

import Progressbar from 'react-water-progressbar'
import { Container, Card, Form } from 'react-bootstrap'
import Example1 from './Example1'
import Example2 from './Example2'
import Example3 from './Example3'

function Presentation() {
  const elements = [
    "Ex1",
    "Ex2",
    "Ex3"
  ]
  const len = elements.length
  const [percent, increment] = React.useReducer((prev, _) => {
    return prev >= len ? 0 : prev+1
  }, 0)

  React.useEffect(() => {
    setInterval(() => {
      increment()
    }, 2000)
  }, [])

  const p = parseInt(percent/len*100.0)
  return (
    <Progressbar
      percent={p}
      text={`${p} %`}
      percentTransition
      items={elements.map((el, index) => {
        return {
          done: index < percent,
          component: el
        }
      })}
    />
  )
}



export default function App() {
  const [value, setValue] = React.useState(50)

  return (
    <div>
      <div style={{ background: 'linear-gradient(#005f98, #598cef)', padding: 50 }}>
        <Container style={{color: 'rgba(0, 0, 0, 0.7)'}}>
          <h1><b>react-water-progressbar</b> demo</h1>
          <a style={{textDecoration: 'none', color: 'rgba(0, 0, 0, 0.7)'}} target="_blank" href="https://github.com/ktomecki/react-water-progressbar">GitHub</a>
          {" | "}
          <a target="_blank" href="https://www.npmjs.com/package/react-water-progressbar" alt="NPM"><img src="https://img.shields.io/npm/v/react-water-progressbar.svg" /></a>
          <br />
          <br />
          {/* <Presentation/> */}
        </Container>
      </div>
      <Container style={{ maxWidth: 800, marginTop: 50 }}>
        <Example1 />
        <Example2 />
        <Example3 />

      </Container>
    </div>


  )
}
