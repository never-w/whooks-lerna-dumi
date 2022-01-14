import { useLayoutEffect, ReactElement } from 'react'
import { BackHandler } from 'react-native'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { usePersistFn } from '@fruits-chain/hooks-laba'

interface NavigationBackParams {
  /** 自定义返回按键组件 */
  backNavigationElementFn: (
    handleBackArrow: VoidFunction,
  ) => ReactElement<{ onPress: typeof handleBackArrow; iconColor: string }>
  /** 点击返回/Android 触发物理按键返回的回调，默认返回上一页 */
  callback?: () => void
  /** 是否重置左上角的返回按钮 */
  resetHeaderBack?: boolean
  /** 是否隐藏返回按键 */
  backShown?: boolean
}

const useNavigationBack = ({
  backNavigationElementFn,
  callback,
  resetHeaderBack = true,
  backShown = true,
}: NavigationBackParams) => {
  const navigation = useNavigation()
  const isFocused = useIsFocused()

  const onPressBackArrow = usePersistFn(() => {
    if (callback) {
      callback()
    } else {
      navigation.goBack()
    }
  })

  useLayoutEffect(() => {
    if (resetHeaderBack) {
      navigation.setOptions({
        headerLeft: () => (backShown ? backNavigationElementFn(onPressBackArrow) : null),
        gestureEnabled: false,
      })
    }

    // Android 物理返回按钮
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (isFocused) {
        onPressBackArrow()
        return true
      } else {
        return false
      }
    })

    return () => {
      backHandler.remove()
    }
  }, [resetHeaderBack, onPressBackArrow, navigation, isFocused, backShown, backNavigationElementFn])
}

export default useNavigationBack
