import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { animOne } from '../animations/anim1'

const StyledCanvas = styled.canvas`
  // width: '100px';
  // height: '100px';
`

// const getMousePos = (canvas: HTMLCanvasElement, evt) => {
//   const rect = canvas.getBoundingClientRect()
//   return {
//     x: ((evt.clientX - rect.left) / (rect.right - rect.left)) * canvas.width,
//     y: ((evt.clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height
//   }
// }

// interface MousePos {
//   x: number
//   y: number
// }

const RCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  // const [mousePos, setMousePos] = useState<MousePos>({ x: 0, y: 0 })

  useEffect(() => {
    return animOne(canvasRef)
  })

  return <StyledCanvas ref={canvasRef} height="300px" width="200px" />
}

export default RCanvas
