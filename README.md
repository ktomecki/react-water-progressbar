# react-water-progressbar


[![NPM](https://img.shields.io/npm/v/react-water-progressbar.svg)](https://www.npmjs.com/package/react-water-progressbar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-water-progressbar
```

## Demo
[custom-item-select](https://ktomecki.github.io/react-water-progressbar/)

![Progressbar with stages description](example1.gif)
![Progressbar as password strength meter](example2.gif)

## Usage

```jsx
import React from 'react'
import { Example } from './utils'

import Progressbar from 'react-water-progressbar'

export default function () {
    const [value, setValue] = React.useState(50)
    return (
        <Example>
            <h4>Progressbar with stages description</h4>
            Set example value of range<br/>
            <input style={{width: '100%'}} type="range" value={value} onChange={e => setValue(e.target.value)} />
            <Progressbar
                percent={value}
                text={`${value} %`}
                items={[
                    { done: value > 20, component: "Stage 1" },
                    { done: value > 40, component: "Stage 2" },
                    { done: value > 60, component: "Stage 3" },
                    { done: value > 80, component: "Stage 4" },
                    { done: value > 99, component: "Stage 5" }
                ]}
            />
        </Example>
    )
}
```

> Made with create-react-library

## License

MIT © [ktomecki](https://github.com/ktomecki)
