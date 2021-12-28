/**
 * title: 无 value，有 onChange 的组件
 * desc: 只要 props 中有 onChange 字段，则在 state 变化时，就会触发 onChange 函数
 */

import React, { useState } from 'react'
import { useControllableValue } from 'w-hooks'

const ControllableComponent = (props: any) => {
  const [state, setState] = useControllableValue<string>(props)

  return (
    <input
      value={state}
      onChange={e => {
        setState(e.target.value)
      }}
      style={{ width: 300 }}
    />
  )
}
const Parent = () => {
  const [state, setState] = useState<number>(0)

  return (
    <>
      <div style={{ marginBottom: 8 }}>state:{state}</div>
      <ControllableComponent onChange={setState} />
    </>
  )
}
export default Parent
