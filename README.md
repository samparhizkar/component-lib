# component-lib-117

> A universal component library

[![NPM](https://img.shields.io/npm/v/component-lib--117.svg)](https://www.npmjs.com/package/component-lib) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation in consumer (CRA) projects

```bash
npm install --save component-lib-117
or
yarn add component-lib-117
```

## Example usage (CRA project)

```jsx
import React, { Component } from 'react'

import {DoorSwtch} from 'component-lib-117'
// import 'component-lib/dist/index.css'

class Example extends Component {
  render() {
    return <DoorSwtch />
  }
}
```

## Testing the library on consumer while developing
From library installed folder run
```jsx
yarn link
yarn start
```
On consumer folder (Your front CRA project) run
```jsx
yarn link component-lib-117
yarn start
```

## License

MIT © [samparhizkar](https://github.com/samparhizkar)
