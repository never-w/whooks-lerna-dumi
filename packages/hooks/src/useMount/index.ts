import { useEffect } from 'react'

/**
 * @description  初始化时的执行函数
 * @default  -
 */
type Params = () => void

const useMount = (fn?: Params) => {
  useEffect(() => {
    fn?.()
  }, [])
}

export default useMount
