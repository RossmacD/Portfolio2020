import React, { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
// import { render } from 'react-dom'
import useWindowDimensions from '../utils/WindowDimensions'
import { sharedSetup, Particle } from '../animations/helpers'

const StyledCanvas = styled.canvas`
  // width: '100px';
  // height: '100px';
  position: absolute;
  z-index: -1;
`

interface RCanvasProps {
  animation: (canvasRef: React.RefObject<HTMLCanvasElement>) => () => void
}

const RCanvas: React.FC<RCanvasProps> = ({ animation }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { height, width } = useWindowDimensions()
  // We force the type as it is always typecheckd before use
  const [canvas, setCanvas] = useState<HTMLCanvasElement | undefined>(undefined)
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | undefined>(undefined)
  // const [counter, setCounter] = useState<number>(0)
  // const [requestId, setRequestId] = useState<number>(0)

  useEffect(() => {
    // Setup variables
    const setup = () => {
      const { ok, canvas: newCanvas, ctx: newCtx } = sharedSetup(canvasRef)
      // Type check variables
      if (ok) {
        // Set variables in state
        setCanvas(oldCanvas => newCanvas)
        setCtx(oldCtx => newCtx)
      }
    }
    // Call next frame - this continues the loop
    setup()
  })

  useEffect(() => {
    if (canvas && ctx) {
      // Continuous variables
      let requestId = 0
      let counter = 0
      const particles: Particle[] = []

      const render = () => {
        // ctx.clearRect(0, 0, canvas.width, canvas.height)
        // ctx.beginPath()
        // ctx.arc(canvas.width / 2, canvas.height / 2, (canvas.height / 6) * Math.abs(Math.cos(counter)), 0, 2 * Math.PI)
        // ctx.fillStyle = 'white'
        // ctx.fill()

        for (const particle in particles) {
        }

        // update
        counter += 0.05
        requestId = requestAnimationFrame(render)
      }

      const prerender = () => {
        for (let index = 1; index <= 100; index += 1) {
          const p1 = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            a: 0
          }
          particles.push(p1)
          particles.push({
            x: p1.x,
            y: p1.y,
            a: Math.PI
          })
        }
        render()
      }

      prerender()
      return () => {
        cancelAnimationFrame(requestId)
      }
    }
  }, [canvas, ctx])

  return <StyledCanvas ref={canvasRef} height={Math.floor(height * 0.8)} width={width} />
}

export default RCanvas
