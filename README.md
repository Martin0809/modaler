# Modaler

![](https://img.shields.io/github/license/martin0809/modaler.svg)

一个简单可插拔的 Modal 容器，

## Getting Started

### Installation

```sh
npm i modaler --save
```

### Usage

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import ModalProvider from 'Modal'
import modals from './modals'

const App = () => (
  <ModalProvider modals={modals}>
    <div>
      <h1>Hello Zeus-ui</h1>
      <Button>Click me</Button>
    </div>
  </ModalProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
```

`modals` 是一个组件列表的映射，类似下边这样：

```jsx
// modals.jsx
import ConfirmModal from './ConfirmModal'

export default {
  CONFIRM_MODAL: ConfirmModal
}
```
