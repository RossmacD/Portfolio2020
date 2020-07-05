import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'

const StyledCanvas = styled.canvas`
  // width: '100px';
  // height: '100px';
`
const getPixelRatio = (ctx: CanvasRenderingContext2D) => {
  const backingStore =
    ctx.backingStorePixelRatio ||
    ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    ctx.backingStorePixelRatio ||
    1

  return (window.devicePixelRatio || 1) / backingStore
}

const RCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      // Canvas set up
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      if (ctx) {
        const ratio = getPixelRatio(ctx)
        const width = getComputedStyle(canvas)
          .getPropertyValue('width')
          .slice(0, -2)
        const height = getComputedStyle(canvas)
          .getPropertyValue('height')
          .slice(0, -2)
        canvas.width = parseInt(width, 10) * ratio
        canvas.height = parseInt(height, 10) * ratio
        canvas.style.width = `${width}px`
        canvas.style.height = `${height}px`

        let requestId: number
        let i = 0

        const render = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height)

          ctx.beginPath()
          ctx.arc(canvas.width / 2, canvas.height / 2, (canvas.width / 2) * Math.abs(Math.cos(i)), 0, 2 * Math.PI)
          ctx.fillStyle = 'white'
          ctx.fill()

          ctx.beginPath()
          ctx.arc(canvas.width / 2, canvas.height / 2, (canvas.width / 2) * Math.abs(Math.cos(i + 2)), 0, 2 * Math.PI)
          ctx.fillStyle = 'black'
          ctx.fill()

          ctx.beginPath()
          ctx.arc(canvas.width / 2, canvas.height / 2, (canvas.width / 2) * Math.abs(Math.cos(i - 1)), 0, 2 * Math.PI)
          ctx.fillStyle = 'white'
          ctx.fill()

          // update
          i += 0.05
          requestId = requestAnimationFrame(render)
        }

        // Call next frame
        render()
        return () => {
          cancelAnimationFrame(requestId)
        }
      }
    }
  })

  return <StyledCanvas ref={canvasRef} height="100px" width="100px" />
}

export default RCanvas
