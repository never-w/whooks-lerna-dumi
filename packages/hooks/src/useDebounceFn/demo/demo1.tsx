/**
 * title: 基础用法
 * desc: 频繁调用 run，但只会在所有点击完成 500ms 后执行一次相关函数
 */

import React, { useState } from 'react'
import { useDebounceFn } from '@fruits-chain/hooks-laba'

export default () => {
  const [value, setValue] = useState(0)
  const { run } = useDebounceFn(
    () => {
      setValue(value + 1)
    },
    {
      wait: 500,
      leading: true,
      trailing: false,
    },
  )

  return (
    <div>
      <p style={{ marginTop: 16 }}> Clicked count: {value} </p>
      <button type="button" onClick={run}>
        快速点击!
      </button>
    </div>
  )
}
