import * as React from 'react'
import styled from '@emotion/styled'
import { useEffect } from 'react'

const StyledCanvas = styled.canvas`
  width: 50vw;
  height: 50vw;
`
const ShowCase: React.FC = () => {
  const canvasRef = React.useRef(null)

  useEffect(() => {
    const canvas = (canvasRef.current as unknown) as HTMLCanvasElement
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    ctx.clearRect(0, 0, canvas.height, canvas.width)
    const draw = () => {
      ctx.clearRect(0, 0, canvas.height, canvas.width)
      ctx.beginPath()
      ctx.rect(20, 20, 150, 100)
      ctx.fillStyle = 'red'
      ctx.fill()

      window.requestAnimationFrame(() => draw())
    }
    draw()
    // implement draw on ctx here
  })

  return <StyledCanvas ref={canvasRef} />
}

export default ShowCase
