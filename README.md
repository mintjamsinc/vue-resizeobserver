# vue-resizeobserver
A reusable resizeobserver directive for Vue.js 2.x.

## Installation

```sh
npm install --save-dev @mintjamsinc/vue-resizeobserver
```

## Usage

```js
import VueResizeObserver from '@mintjamsinc/vue-resizeobserver';
Vue.use(VueResizeObserver);
```

```vue
<div key="list-container" v-resizeobserver="onListContainerResized">
</div>
```

```js
export default {
  methods: {
    onListContainerResized() {
    },
  },
}
```

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021 MintJams Inc.