---
title: useLayout
order: 3
nav:
  title: rnHooks
  order: 2
  path: /rnHooks/src
group:
  title: react-native-Hooks
  path: /basis
---

# useLayout

当布局完成时获取组件的宽高和位置

## 代码演示

### 基础示例

```typescript
import { useLayout } from 'w-rnhooks'

const { onLayout, ...layout } = useLayout()

<View onLayout={onLayout} style={{width: 200, height: 200, marginTop: 30}} />
```

### Result

| 参数     | 说明              | 类型               | 默认值 |
| -------- | ----------------- | ------------------ | ------ |
| width    | 当前组件的宽度    | `number`           | -      |
| height   | 当前组件的高度    | `number`           | -      |
| x        | x 轴位置          | `number`           | -      |
| y        | y 轴位置          | `number`           | -      |
| onLayout | onLayout 回调函数 | `(e: any) => void` | -      |
