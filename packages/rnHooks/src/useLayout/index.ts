import { useState, useCallback } from 'react'

interface LayoutRectangle {
  x: number
  y: number
  width: number
  height: number
}

export default function useLayout() {
  const [layout, setLayout] = useState<LayoutRectangle>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })
  const onLayout = useCallback(
    e => setLayout(e.nativeEvent.layout as LayoutRectangle),
    [],
  )

  return {
    onLayout,
    ...layout,
  }
}
