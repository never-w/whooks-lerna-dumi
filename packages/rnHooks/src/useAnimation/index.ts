import { useRef, useEffect } from 'react'
import { Animated } from 'react-native'

type AnimationType = 'spring' | 'timing'

interface BaseAnimationConfig {
  initialValue?: number
  type: AnimationType
}

type TimingAnimationConfig = BaseAnimationConfig &
  ({ type: 'timing' } & Animated.TimingAnimationConfig)

type SpringAnimationConfig = BaseAnimationConfig &
  ({ type: 'spring' } & Animated.SpringAnimationConfig)

type UseAnimationConfig = TimingAnimationConfig | SpringAnimationConfig

const getInitialValue = (config: UseAnimationConfig) => {
  if (typeof config.initialValue !== 'undefined') return config.initialValue
  else {
    return config.toValue as number // TODO deal with other types possibilities here
  }
}

const useAnimatedValue = (initialValue: number): Animated.Value => {
  const ref = useRef(new Animated.Value(initialValue))
  return ref.current
}

const useAnimation = (config: UseAnimationConfig): Animated.Value => {
  const animatedValue = useAnimatedValue(getInitialValue(config))

  const animate = () => {
    if (config.type === 'timing') {
      Animated.timing(animatedValue, config).start()
    } else if (config.type === 'spring') {
      Animated.spring(animatedValue, config).start()
    } else {
      // @ts-ignore
      throw new Error('unsupported animation type=' + config.type)
    }
  }

  useEffect(animate, [config.toValue])

  return animatedValue
}

export default useAnimation
