---
title: usePersistFn
order: 5
nav:
  title: Hooks
  order: 1
  path: /hooks/src
group:
  title: 基础Hooks
  path: /basis
---

# usePersistFn

持久化 function 的 Hook，理论上，可以使用 usePersistFn 完全代替 useCallback。

在某些场景中，我们需要使用 useCallback 来记住一个函数，但是在第二个参数 deps 变化时，会重新生成函数，导致函数地址变化。

```js
const [state, setState] = useState('')

// 在 state 变化时，func 地址会变化
const func = useCallback(() => {
  console.log(state)
}, [state])
```

使用 usePersistFn，可以省略第二个参数 deps，同时保证函数地址永远不会变化。

```js
const [state, setState] = useState('')

// func 地址永远不会变化
const func = usePersistFn(() => {
  console.log(state)
})
```

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx" />

<!-- ### 性能提升TODO:暂时注释 -->

<!-- <code src="./demo/demo2.tsx" /> TODO:暂时注释 -->

## API

```typescript
const fn = usePersistFn<T>(fn: T): T
```

### Result

| 参数 | 说明                      | 类型                      |
| ---- | ------------------------- | ------------------------- |
| fn   | 引用地址永远不会变化的 fn | `(...args: any[]) => any` |

### Params

| 参数 | 说明             | 类型                      | 默认值 |
| ---- | ---------------- | ------------------------- | ------ |
| fn   | 需要持久化的函数 | `(...args: any[]) => any` | -      |
