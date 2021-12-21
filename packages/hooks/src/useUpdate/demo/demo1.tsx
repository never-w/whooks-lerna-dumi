/**
 * title: 基础用法
 * desc: 强制组件重新渲染。
 */

import React from 'react'
import dayjs from 'dayjs'
import { useUpdate } from 'hooks'

export default () => {
  const update = useUpdate()

  return (
    <>
      <div>当前时间: {dayjs().format('YYYY-MM-DD HH:mm:ss')}</div>
      <button type="button" onClick={update} style={{ marginTop: 8 }}>
        更新
      </button>
    </>
  )
}
