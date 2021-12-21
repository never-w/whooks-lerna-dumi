import React, { useState } from 'react'
import { message } from 'antd'
import { useUnmount } from 'w-rnhooks'

const MyComponent = () => {
  useUnmount(() => {
    message.info('Unmount')
  })

  return <div>Hello World</div>
}

export default () => {
  const [state, setState] = useState(true)

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setState(!state)
        }}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <MyComponent />}
    </>
  )
}
