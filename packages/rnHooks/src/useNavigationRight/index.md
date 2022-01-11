---
title: useNavigationRight
order: 7
nav:
  title: rnHooks
  order: 2
  path: /rnHooks/src
group:
  title: react-native-Hooks
  path: /basis
---

# useNavigationRight

自定义导航右上角组件，并且自定义点击事件 callback

## 代码演示

### 基础示例

```typescript
import { useNavigationRight } from 'w-rnhooks'

useNavigationRight({
  callback: () => {
    // do something
  },
  headerRightFn: callback => <CustomCom onPress={callback} />,
})
```

### 参数

| 参数          | 说明                           | 类型                                          | 默认值 |
| ------------- | ------------------------------ | --------------------------------------------- | ------ |
| callback      | 自定义导航右上角组件的回调函数 | `VoidFunction`                                | -      |
| headerRightFn | 自定义导航右上角组件           | `(callback: VoidFunction) => React.ReactNode` | -      |
