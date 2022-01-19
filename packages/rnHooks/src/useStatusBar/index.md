---
title: useStatusBar
order: 1
nav:
  title: rnHooks
  order: 2
  path: /rnHooks/src
group:
  title: react-native-Hooks
  path: /basis
---

# useStatusBar

自定义状态栏高亮和是否透明

## API

```typescript
useStatusBar(barStyle, translucent)
```

### 参数

| 参数        | 说明                            | 类型                                             | 默认值 |
| ----------- | ------------------------------- | ------------------------------------------------ | ------ |
| barStyle    | 设置状态栏文本的颜色            | `"default" \| "light-content" \| "dark-content"` | -      |
| translucent | 推荐设置为`true`仅 android 生效 | `boolean`                                        | -      |
