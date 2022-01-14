/**
 * title: 确保实例不会被重复创建
 * desc: 点击 "Rerender" 按钮，触发组件的更新，但 Foo 的实例会保持不变
 */
import React, { useState } from 'react'
import { useCreation } from '@fruits-chain/hooks-laba'

export default function () {
  const foo = useCreation(() => ({ data: Math.random() }), [])
  const [, setFlag] = useState({})
  return (
    <>
      <p>{foo.data}</p>
      <button
        type="button"
        onClick={() => {
          setFlag({})
        }}>
        Rerender
      </button>
    </>
  )
}
