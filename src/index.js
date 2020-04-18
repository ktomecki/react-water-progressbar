import React from 'react'
import { defaultStyles } from './styles'
import { useAnimationFrames, OneSide, useColors } from './utils'

const defaultGradient = [
  { color: '#005f98', offset: 0 },
  { color: '#6ccde1', offset: 0.5 },
  { color: '#598cef', offset: 1.0 }
]

export default function ({
  percent = 0,
  style = {},
  internalStyles = defaultStyles(),
  colors = defaultGradient,
  text = "",
  height = 5,
  dropHeight = 20
}) {

  const [scaleDrop, startDropAnimation] = useAnimationFrames([0.8, 1.2, 0.9, 1.1, 0.9, 1.0], 100, 1.0)
  const [sliderHeight, startSliderAnimation] = useAnimationFrames([5.0, 3.0, 5.0], 100, 1.0)
  const dropRef = React.useRef()
  const [color, accentColor, textColor] = useColors(colors, percent)

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
    <div style={{ ...internalStyles.container, height: height + dropHeight, ...style }}>
      <div style={{ ...internalStyles.slider, height: sliderHeight }}>
        <div style={{
          ...internalStyles.loader,
          backgroundColor: color,
          width: loaderWidth,
        }}>
        </div>
        <div style={{ ...internalStyles.dropContainer, left: loaderLeft }}>
          <div ref={dropRef} style={{...dropStyles}}>
            <div style={{ height: dropHeight}}>
              <OneSide color={color} />
            </div>
            <div style={{...internalStyles.textContainer}}>
              <div style={{ ...internalStyles.text, transform: `translateY(calc(${dropHeight/2.0}px - 65%))`, color: textColor}}>
                  {text}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}