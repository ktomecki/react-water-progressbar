import React from 'react'
import { defaultStyles } from './styles'
import { useAnimationFrames, OneSide, useColors, useHover, Wave } from './utils'
import { Context } from './Context'

const defaultGradient = [
  { color: '#005f98', offset: 0 },
  { color: '#6ccde1', offset: 0.5 },
  { color: '#598cef', offset: 1.0 }
]


function Card({ items }) {
  const { internalStyles, dropHeight, percent, height, loaderWidth, color, accentColor, textColor, isHovered } = React.useContext(Context)

  const cardWidth = 200
  const left = React.useMemo(() => `max(calc(${loaderWidth} - ${cardWidth}px - 2px), 0px)`, [percent, cardWidth])

  const [show, setShow] = React.useState(false)
  const timeoutRef = React.useRef()
  const cardRef = React.useRef()

  React.useEffect(() => {
    clearTimeout(timeoutRef.current)
    setShow(true)
    timeoutRef.current = setTimeout(() => {
      setShow(false)
    }, 2000)
  }, [percent])

  const containerHeight = React.useMemo(() => {
    if(show === true || isHovered === true) {
      return cardRef.current.scrollHeight
    } 
    return 0
  }, [show, isHovered])

  return (
    <div ref={cardRef} style={{ ...internalStyles.card, height: containerHeight, width: cardWidth, top: height, left: left }}>
      <div style={{ ...internalStyles.cardFlex, paddingTop: dropHeight }}>
        <div style={internalStyles.cardTodo}>
          <ul style={internalStyles.cardUl}>
            {items.filter(el => el.done === false).map(el => <li style={{ paddingLeft: '1.3em' }}>⛔ {el.component}</li>)}
          </ul>
        </div>
        <div style={internalStyles.cardWave}>
          <Wave color={color} />
        </div>
        <div style={{ ...internalStyles.cardDone, background: `linear-gradient(${color}, ${accentColor})`, color: textColor }}>
          <ul style={internalStyles.cardUl}>
            {items.filter(el => el.done === true).map(el => <li style={{ paddingLeft: '1.3em' }}>👍 {el.component}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function ({
  percent = 0,
  style = {},
  internalStyles = defaultStyles(),
  colors = defaultGradient,
  text = "",
  height = 5,
  dropHeight = 20,
  items
}) {

  const [scaleDrop, startDropAnimation] = useAnimationFrames([0.8, 1.2, 0.9, 1.1, 0.9, 1.0], 100, 1.0)
  const [sliderHeight, startSliderAnimation] = useAnimationFrames([5.0, 3.0, 5.0], 100, 1.0)
  const dropRef = React.useRef()
  const [color, accentColor, textColor] = useColors(colors, percent)
  const [hoverRef, isHovered] = useHover();

  React.useEffect(() => {
    startSliderAnimation()
    startDropAnimation()
  }, [])

  const loaderWidth = React.useMemo(() => `${Math.min(100, Math.max(0, percent))}%`, [percent])
  const dropWidth = React.useMemo(() => dropRef.current ? dropRef.current.offsetWidth : 0, [dropRef.current])
  const loaderLeft = React.useMemo(() => `max(calc(${loaderWidth} - ${dropWidth}px - 2px), 0px)`, [percent, dropWidth])

  const dropStyles = React.useMemo(() => {
    return {
      ...internalStyles.drop,
      transform: `scaleY(${scaleDrop}) scaleX(${(1.0 - scaleDrop) + 1.0})`,
      visibility: (dropWidth > 0 ? 'visible' : 'hidden'),
      height: dropHeight
    }
  }, [internalStyles.drop, scaleDrop, dropWidth])


  return (
    <Context.Provider
      value={{
        internalStyles,
        percent,
        color,
        accentColor,
        textColor,
        dropHeight,
        height,
        loaderWidth,
        isHovered
      }}
    >
      <div ref={hoverRef} style={{ ...internalStyles.container, height: height + dropHeight, ...style }}>
        <div style={{ ...internalStyles.slider, height: sliderHeight }}>
          <div style={{
            ...internalStyles.loader,
            backgroundColor: color,
            width: loaderWidth,
          }}>
          </div>
          <div style={{ ...internalStyles.dropContainer, left: loaderLeft, zIndex: 1000 }}>
            <div ref={dropRef} style={{ ...dropStyles }}>
              <div style={{ height: dropHeight }}>
                <OneSide color={color} />
              </div>
              <div style={{ ...internalStyles.textContainer }}>
                <div style={{ ...internalStyles.text, transform: `translateY(calc(${dropHeight / 2.0}px - 65%))`, color: textColor }}>
                  {text}
                </div>
              </div>
            </div>
          </div>
          <Card items={items}>

          </Card>
        </div>
      </div>
    </Context.Provider>
  )
}