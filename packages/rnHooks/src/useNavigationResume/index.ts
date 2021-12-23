import { useEffect, useRef } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { usePersistFn } from 'w-rnhooks'

const useNavigationResume = (callback: () => void) => {
  const isFocused = useIsFocused()
  const mounted = useRef(false)
  const callbackPersistFn = usePersistFn(callback)

  useEffect(() => {
    if (mounted.current && isFocused) {
      callbackPersistFn()
    }
  }, [isFocused, callbackPersistFn])

  useEffect(() => {
    mounted.current = true
  }, [])
}

export default useNavigationResume
