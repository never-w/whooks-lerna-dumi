import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

interface UseNavigationHeaderCustomColorParams {
  /**
   * 自定义颜色
   * @default 主题色
   */
  color?: string
  /**
   * 自定义头部样式
   */
  headerStyle: Object
  /**
   * 自定义导航左上角组件fn
   */
  headerLeft: () => React.ReactElement<any, any>
}

const useNavigationHeaderCustomColor = (
  options?: UseNavigationHeaderCustomColorParams,
) => {
  const { color, headerStyle, headerLeft } = options || {}
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle,
      headerTitleStyle: {
        color: '#fff',
      },
      headerLeft,
    })
  }, [color, headerLeft, headerStyle, navigation])
}

export default useNavigationHeaderCustomColor
