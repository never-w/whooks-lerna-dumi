---
title: useAnimation
order: 2
nav:
  title: rnHooks
  order: 2
  path: /rnHooks/src
group:
  title: react-native-Hooks
  path: /basis
---

# useAnimation

react native 动画 hook。

## 代码演示

### 基础示例

```typescript
import React, { useState } from 'react'
import { Animated, Switch, View } from 'react-native'
import { useAnimation } from 'w-rnhooks'

export default () => {
  const [bool, setBool] = useState(false)

  const animatedValue = useAnimation({
    type: 'timing',
    toValue: bool ? 1 : 0,
    duration: 800,
    useNativeDriver: true,
  })

  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 10 }}>
        <Switch value={bool} onValueChange={setBool} />
      </View>
      <View
        style={{
          flex: 1,
          padding: 10,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Animated.View
          style={[
            { width: 50, height: 50, backgroundColor: 'red' },
            {
              opacity: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
          ]}
        />
        <Animated.View
          style={[
            { width: 50, height: 50, backgroundColor: 'red' },
            {
              transform: [
                {
                  scale: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.5, 1],
                  }),
                },
              ],
            },
          ]}
        />
      </View>
    </View>
  )
}
```

## API

```typescript
type UseAnimationConfig = TimingAnimationConfig | SpringAnimationConfig
const animatedValue = useAnimation(config: UseAnimationConfig)
```

### TimingAnimationConfig

| 参数            | 说明                                                                       | 类型                                       | 默认值 |
| --------------- | -------------------------------------------------------------------------- | ------------------------------------------ | ------ |
| type            | 动画类型:当 type 类型为 TimingAnimationConfig 则它的值只能设置为`"timing"` | `"timing"`                                 | -      |
| initialValue    | 可选：动画函数初始值                                                       | `number`                                   | 0      |
| toValue         | 动画函数结束时的值                                                         | `number`                                   | -      |
| easing          | 可选：`easing` 曲线函数来控制动画值的变化速度                              | `((value: number) => number) \| undefined` | -      |
| duration        | 可选：等待时间，单位为毫秒                                                 | `number`                                   | -      |
| delay           | 可选：是否在延迟开始后调用函数                                             | `boolean`                                  | -      |
| useNativeDriver | 可选：启用原生动画驱动，用于性能优化                                       | `boolean`                                  | -      |

<!-- ### SpringAnimationConfig

| 参数         | 说明                     | 类型      | 默认值 |
| ------------ | ------------------------ | --------- | ------ |
| type         | 是否在延迟开始前调用函数 | `boolean` | `true` |
| initialValue | 等待时间，单位为毫秒     | `number`  | `1000` |
| toValue      | 是否在延迟开始后调用函数 | `boolean` | `true` |
| easing       | 是否在延迟开始前调用函数 | `boolean` | `true` |
| duration     | 等待时间，单位为毫秒     | `number`  | `1000` |
| delay        | 是否在延迟开始后调用函数 | `boolean` | `true` |

### Result

| 参数   | 说明                               | 类型                      |
| ------ | ---------------------------------- | ------------------------- |
| run    | 触发执行 fn，函数参数将会传递给 fn | `(...args: any[]) => any` |
| cancel | 取消当前节流                       | `() => void`              |
| flush  | 当前节流立即调用                   | `() => void`              | -->
