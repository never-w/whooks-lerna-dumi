---
title: useNavigationHeaderCustomColor
order: 8
nav:
  title: rnHooks
  order: 2
  path: /rnHooks/src
group:
  title: react-native-Hooks
  path: /basis
---

# useNavigationHeaderCustomColor

自定义导航头部样式颜色

## 代码演示

### 基础示例

```typescript
import { useNavigationHeaderCustomColor } from '@fruits-chain/hooks-laba-rn'

useNavigationHeaderCustomColor()
```

### 参数

| 参数            | 说明                              | 类型                                 | 默认值 |
| --------------- | --------------------------------- | ------------------------------------ | ------ |
| color           | `可选` 自定义颜色                 | `string`                             | -      |
| backgroundColor | `可选` 自定义头部导航和状态栏颜色 | `string`                             | -      |
| headerLeft      | `可选` 自定义导航左上角组件       | `() => React.ReactElement<any, any>` | -      |
