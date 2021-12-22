import throttle from 'lodash/throttle'
import { useMemo, useRef } from 'react'
import useUnmount from '../useUnmount'

export interface ThrottleOptions {
  wait?: number
  leading?: boolean
  trailing?: boolean
}
type noop = (...args: any) => any

function useThrottleFn<T extends noop>(fn: T, options?: ThrottleOptions) {
  const fnRef = useRef(fn)
  fnRef.current = fn

  const wait = options?.wait ?? 1000

  const throttled = useMemo(
    () =>
      throttle<T>(
        ((...args: any[]) => {
          return fnRef.current(...args)
        }) as T,
        wait,
        options,
      ),
    [],
  )

  useUnmount(() => {
    throttled.cancel()
  })

  return {
    run: throttled as unknown as T,
    cancel: throttled.cancel,
    flush: throttled.flush,
  }
}

export default useThrottleFn
