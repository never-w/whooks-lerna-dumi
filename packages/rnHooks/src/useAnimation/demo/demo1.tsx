import React, { useState } from 'react'
import { Animated, Switch, View } from 'react-native'
import { useAnimation } from '@fruits-chain/hooks-laba-rn'

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
