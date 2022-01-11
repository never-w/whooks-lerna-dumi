import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { usePersistFn } from 'w-hooks'

interface Options {
  callback: VoidFunction
  /** 自定义导航栏右侧组件 */
  headerRightFn: (
    callback: VoidFunction,
  ) => React.ReactElement<{ onPress: VoidFunction }>
}

/** 导航栏右侧hook */
const useNavigationRight = ({ callback, headerRightFn }: Options) => {
  const navigation = useNavigation()
  const callbackPersistFn = usePersistFn(callback)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => headerRightFn,
    })
  }, [navigation, callbackPersistFn, headerRightFn])
}

export default useNavigationRight
