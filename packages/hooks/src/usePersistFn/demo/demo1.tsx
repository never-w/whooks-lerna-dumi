/**
 * title: 基础用法
 * desc: usePersistFn 与 useCallback 可以实现同样的效果。
 */

import React, { useState, useCallback } from 'react'
import { message } from 'antd'
import { usePersistFn } from 'w-hooks'

export default () => {
  const [count, setCount] = useState(0)

  const callbackFn = useCallback(() => {
    message.info(`Current count is ${count}`)
  }, [count])

  const memoizedFn = usePersistFn(() => {
    message.info(`Current count is ${count}`)
  })

  return (
    <>
      <p>count: {count}</p>
      <button
        type="button"
        onClick={() => {
          setCount(c => c + 1)
        }}>
        Add Count
      </button>
      <div style={{ marginTop: 16 }}>
        <button type="button" onClick={callbackFn}>
          call callbackFn
        </button>
        <button type="button" onClick={memoizedFn} style={{ marginLeft: 8 }}>
          call memoizedFn
        </button>
      </div>
    </>
  )
}