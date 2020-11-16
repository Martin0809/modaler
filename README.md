# Modaler

![](https://img.shields.io/github/license/martin0809/modaler.svg)

一个简单可插拔的 Modal 容器，页面中用到的 Modal 在没有被调用时，不会渲染在组件中。

## Getting Started

### Installation

```sh
npm i modaler --save
```

_注意：插件中用了 React Hooks, 请使用 React `v16.8.0` 或以上的版本_

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
  <ModalProvider modalMap={modals} hideDelay={300} fallback={null}>
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
  CONFIRM_MODAL: ConfirmModal,
}
```

Modaler 同时提供了一个 `useModal` 的 Hook，返回一个对象，可以通过 `show` 和 `hide` 方法控制 Modal。

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

### ModalProviderProps

- modalMap: Modal 组件以 key value 形式的映射
- hideDelay: 延时关闭
- fallback: `React.Suspense` 中的 fallback

### useModal(): object

#### show(key: string, props: object)

- key: 想要渲染的 Modal 组件的 key，必填
- props: 传递给 Modal 组件的 props，默认带有 `visible` 属性，控制 Modal 组件显示隐藏时请使用该属性

#### hide(symbol: string, wait: number)

- symbol: 指定关闭 key 为 symbol 的 Modal 组件
- wait: 毫秒数，一定时间后销毁 Modal 组件，一般用于有关闭动画的 Modal 组件，默认为 `hideDelay`

#### hide(wait: number)

关闭全部 Modal 组件

- wait: 毫秒数，一定时间后销毁 Modal 组件，一般用于有关闭动画的 Modal 组件，默认为 `hideDelay`

## Demo

```sh
git clone git@github.com:Martin0809/modaler.git && cd modaler

npm i
npm start
```
