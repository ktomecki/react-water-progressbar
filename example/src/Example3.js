import React from 'react'
import { Example } from './utils'

import Progressbar from 'react-water-progressbar'

export default function () {
    const [value, setValue] = React.useState(50)
    const gradient = [
        { color: '#59C173', offset: 0.0 },
        { color: '#a17fe0', offset: 0.5 },
        { color: '#5D26C1', offset: 1.0 },
    ]
    return (
        <Example>
            <h4>Progressbar without list</h4>
            Set example value of range<br/>
            <input style={{width: '100%'}} type="range" value={value} onChange={e => setValue(e.target.value)} />
            <Progressbar
                gradient={gradient}
                percent={value}
                text={`${value} %`}
            />
        </Example>
    )
}
