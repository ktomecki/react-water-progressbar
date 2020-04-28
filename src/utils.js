import React from 'react'

export function OneSide({ color }) {
  return (
    <svg preserveAspectRatio="none" style={{ verticalAlign: 'top' }} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 273.038 86">
      <path fill={color} id="Union_1" data-name="Union 1" d="M90,86v-.24C68.336,84.694,44.62,66.376,34.213,49.031,22.727,29.889,28.089,10.03,0,0H273.038c-28.089,10.03-22.728,29.889-34.214,49.031-10.716,17.86-35.543,36.751-57.71,36.778-.1.041-.115-.173-.115-.173V86Z" />
    </svg>
  )
}

export function useAnimationFrames(array, time, initialValue) {
  const [value, setValue] = React.useState(initialValue)
  const timeout = React.useRef()
  function f(i) {
    setTimeout(() => {
      setValue(array[i])
      if (i < array.length - 1)
        f(i + 1)
      else
        timeout.current = null
    }, time)
  }
  const start = () => {
    if (timeout.current == null)
      f(0)
  }
  return [value, start]
}

export function useTransition(destination, duration) {
  const [value, setValue] = React.useState(destination)
  const timeout = React.useRef()
  const tick = 25

  function f(time) {
    timeout.current = setTimeout(() => {
      setValue(v => v + (time/duration * (destination-v)))
      if(time < duration)
        f(time+tick)
    }, tick)
  }

  React.useEffect(() => {
    clearTimeout(timeout.current)
    f(0)
  }, [destination])

  //console.log(duration)
  return value
}

function rgbToHsl(r, g, b) {
  r /= 255, g /= 255, b /= 255;
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return [h, s, l];
}

function lerp(value1, value2, amount) {
  amount = amount < 0 ? 0 : amount;
  amount = amount > 1 ? 1 : amount;
  return value1 + (value2 - value1) * amount;
};


function lighten(light, factor) {
  return lerp(light, 1.0, factor)
}

function darken(light, factor) {
  return lerp(light, 0.0, factor)
}

export function generateGradient(colors) {
  var element = document.createElement("canvas")
  element.setAttribute('width', 105)
  element.setAttribute('height', 10)
  var ctx = element.getContext('2d')
  var g = ctx.createLinearGradient(0, 0, 105, 0);
  colors.forEach(el => g.addColorStop(el.offset, el.color))
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 105, 10);
  const color = []
  const accent = []
  const text = []
  for (var i = 0; i <= 101; i++) {
    const data = ctx.getImageData(i, 1, 1, 1).data

    color.push(`rgb(${data[0]} ${data[1]} ${data[2]})`)
    const [h, s, l] = rgbToHsl(data[0], data[1], data[2])

    const lAccent = (l > 0.5) ? darken(l, 0.1) : lighten(l, 0.1)
    const lText = (l > 0.5) ? darken(l, 0.5) : lighten(l, 0.8)

    accent.push(`hsl(${parseInt(h * 360.0)}, ${parseInt(s * 100.0)}%, ${parseInt(lAccent * 100)}%)`)
    text.push(`hsl(${parseInt(h * 360.0)}, ${parseInt(s * 100.0)}%, ${parseInt(lText * 100)}%)`)

  }
  return [color, accent, text]
}

export function useColors(colors, percent) {
  const [gradient, gradientAccent, gradientText] = React.useMemo(() => generateGradient(colors), [colors])
  const [color, accentColor, textColor] = React.useMemo(() => [gradient[percent], gradientAccent[percent], gradientText[percent]], [percent])

  return [color, accentColor, textColor]
}

export function useHover() {
  const [value, setValue] = React.useState(false);
  const ref = React.useRef(null);
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);
  React.useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);
        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );
  return [ref, value];

}

export function Wave({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1018.476 142.562" preserveAspectRatio="none">
      <path fill={color} id="Path_1" data-name="Path 1" d="M1338.8,592.7s-108.418,65.432-238.74,65.432S817.519,592.7,817.519,592.7,698.7,536.617,574.4,536.617,320.327,592.7,320.327,592.7v86.477H1338.8Z" transform="translate(-320.327 -536.617)" />
    </svg>
  )
}