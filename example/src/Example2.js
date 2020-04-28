import React from 'react'
import { Example } from './utils'

import Progressbar from 'react-water-progressbar'

export default function () {
    const [value, setValue] = React.useState("")
    const [showList, setShowList] = React.useState(null)
    const isLength = React.useMemo(() => value.length > 10, [value])
    const isbigAndSmall = React.useMemo(() => (/[a-z]/.test(value)) && (/[A-Z]/.test(value)), [value])
    const isSpecial = React.useMemo(() => (/[!@#$%^&*(),.?":{}|<>]/.test(value)), [value])
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
  
    const customGradient = [
      { color: '#045bb3', offset: 0 },
      { color: '#04bf4e', offset: 1.0 }
    ]
  
    return (
      <Example>
        <h4>Password strength meter</h4>
        <input 
            type="text" 
            value={value} 
            onChange={e => setValue(e.target.value)} 
            onFocus={() => setShowList(true)} 
            onBlur={() => setShowList(null)} 
            placeholder="example password" 
            style={{width: '100%', border: '1px solid rgba(0, 0, 0, 0.1)'}}
        />
        <Progressbar
          showList={showList}
          percent={points}
          gradient={customGradient}
          text={icon}
          okIcon="✅"
          percentTransition
          items={[
            { done: isLength, component: "Length > 10" },
            { done: isbigAndSmall, component: "Contains Upper and Lowercase" },
            { done: isSpecial, component: "Contains special chars" },
            { done: isNumber, component: "Contains numeric chars" },
          ]}
        />
      </Example>
    )
}
