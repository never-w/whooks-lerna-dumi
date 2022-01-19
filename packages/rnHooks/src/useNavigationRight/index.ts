import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/core'

/** 自定义导航栏右侧组件hook */
const useNavigationRight = (NavRightCustomCom: React.ReactNode) => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => NavRightCustomCom,
    })
  }, [navigation, NavRightCustomCom])
}

export default useNavigationRight
