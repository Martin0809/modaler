# Modaler

![](https://img.shields.io/github/license/martin0809/modaler.svg)

一个简单可插拔的 Modal 容器，页面中用到的 Modal 在没有被调用时，不会渲染在组件中。

## Getting Started

### Installation

```sh
npm i modaler --save
```

### Usage

Modaler 提供了一个 `Provider` 组件，包裹在你的程序外边，可以在用到第三方 Modal 组件事动态插入到 `document.body` 中。
_注意：控制 Modal 显示隐藏的时，请使用 `props.visible`_

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import ModalProvider from 'modaler'
import Container from './Container'
import modals from './modals'

const App = () => (
  <ModalProvider modals={modals}>
    <Container />
  </ModalProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
```

`modals` 是一个组件列表的映射，类似下边这样：

```js
// modals.js
import ConfirmModal from './ConfirmModal'

export default {
  CONFIRM_MODAL: ConfirmModal
}
```

```jsx
// Container.jsx
import React from 'react'
import { useModal } from 'modaler'

const Container = () => {
  const modal = useModal()

  const show = () => {
    modal.show('CONFIRM_MODAL')
  }

  return <button onClick={show}>show Modal</button>
}

export default Container
```

## Api

## Demo

```sh
git clone git@github.com:Martin0809/modaler.git && cd modaler

npm i
npm start
```
