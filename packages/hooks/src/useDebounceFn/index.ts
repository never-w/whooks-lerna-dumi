import { useMemo, useRef } from 'react'
import { debounce } from 'lodash'
import useUnmount from '../useUnmount'

type noop = (...args: any) => any
interface DebounceOptions {
  wait?: number
  leading?: boolean
  trailing?: boolean
  maxWait?: number
}

function useDebounceFn<T extends noop>(fn: T, options?: DebounceOptions) {
  const fnRef = useRef(fn)
  fnRef.current = fn

  const wait = options?.wait ?? 1000

  const debounced = useMemo(
    () =>
      debounce<T>(
        ((...args: any[]) => {
          return fnRef.current(...args)
        }) as T,
        wait,
        options,
      ),
    [],
  )

  useUnmount(() => {
    debounced.cancel()
  })

  return {
    run: debounced as unknown as T,
    cancel: debounced.cancel,
    flush: debounced.flush,
  }
}

export default useDebounceFn
