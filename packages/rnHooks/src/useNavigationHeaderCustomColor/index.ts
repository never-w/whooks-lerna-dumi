import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

interface UseNavigationHeaderCustomColorParams {
  /**
   * 自定义颜色
   * @default title的颜色
   */
  color?: string
  /**
   * 自定义头部样式
   */
  backgroundColor?: string
  /**
   * 自定义导航左上角组件fn
   */
  headerLeft?: (props: any) => React.ReactElement<any, any>
}

const useNavigationHeaderCustomColor = (options?: UseNavigationHeaderCustomColorParams) => {
  const navigation = useNavigation()
  const { color = '#fff', backgroundColor = '#0065FE', headerLeft = null } = options || {}

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor,
      },
      headerTitleStyle: {
        color,
      },
      headerLeft,
    })
  }, [backgroundColor, color, headerLeft, navigation])
}

export default useNavigationHeaderCustomColor
