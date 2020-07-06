import { Ref, useLayoutEffect, useState } from 'react'

export const getDimensions = (ref: Ref) => {
  const [dimensions, setDimensions] = useState({})
  useLayoutEffect(() => {
    setDimensions(ref.current.getBoundingClientRect().toJSON())
  }, [ref.current])

  return [dimensions]
}
