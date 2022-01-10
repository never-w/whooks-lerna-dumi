---
title: useNavigationBack
order: 6
nav:
  title: rnHooks
  order: 2
  path: /rnHooks/src
group:
  title: react-native-Hooks
  path: /basis
---

# useNavigationBack

自定义左上角返回按钮组件，并且自定义返回到哪个页面

## 代码演示

### 基础示例

```typescript
import { useNavigationBack } from 'w-rnhooks'

useNavigationBack({
  callback: () => {
    navigation.navigate('PURCHASE_LIST', {
      commodityType,
    })
  },
  backNavigationElementFn: handleBackArrow => (
    <CustomCom onPress={handleBackArrow} iconColor="#fff" />
  ),
})
```

### 参数

| 参数                    | 说明                                                                                    | 类型                                                 | 默认值 |
| ----------------------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------- | ------ |
| callback                | 可选，自定义点击返回/Android 触发物理按键返回的回调，默认返回上一页，用于返回自定义页面 | `VoidFunction`                                       | -      |
| backNavigationElementFn | 自定义左上角返回按钮函数，形参`handleBackArrow`是你自定义的 callback，用法如上面 API    | `(handleBackArrow: VoidFunction) => React.ReactNode` | -      |
| resetHeaderBack         | 可选，是否重置左上角的返回按钮                                                          | `boolean`                                            | true   |
| backShown               | 可选，是否隐藏返回按键                                                                  | `boolean`                                            | true   |
