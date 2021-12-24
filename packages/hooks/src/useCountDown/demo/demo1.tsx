/**
 * title: 基础用法
 * desc: 基础的倒计时管理。
 */

import React from 'react'
import { useCountDown } from 'w-hooks'

export default () => {
  const [countdown, formattedRes] = useCountDown({
    targetDate: '2022-12-31 24:00:00',
  })
  const { days, hours, minutes, seconds, milliseconds } = formattedRes

  return (
    <p>
      There are {days} days {hours} hours {minutes} minutes {seconds} seconds{' '}
      {milliseconds} milliseconds until 2022-12-31 24:00:00
    </p>
  )
}
