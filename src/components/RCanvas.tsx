import React, { useEffect, useRef, useState, useReducer } from 'react'
import styled from '@emotion/styled'
// import { render } from 'react-dom'
import Perlin from 'perlin.js'
import useWindowDimensions from '../utils/WindowDimensions'
import { sharedSetup, Particle, getPixelRatio } from '../animations/helpers'

const StyledCanvas = styled.canvas`
  position: absolute;
  top: 0;
  z-index: -1;
`

interface RCanvasProps {
  dimensions: any
}

const RCanvas: React.FC<RCanvasProps> = React.memo(({ dimensions }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const { height, width } = typeof window !== 'undefined' && window ? useWindowDimensions() : { height: 0, width: 0 }
  // We force the type as it is always typecheckd before use
  const [canvas, setCanvas] = useState<HTMLCanvasElement | undefined>(undefined)
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | undefined>(undefined)
  // const [ignored, forceUpdate] = useState<number>(0)
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
  }, [height, width])

  useEffect(() => {
    // console.log(dimensions)
    if (canvas && ctx) {
      // Continuous variables
      let requestId = 0
      const particles: Particle[] = []

      const render = () => {
        // ctx.clearRect(0, 0, canvas.width, canvas.height)

        const period = 0.02
        const ratio = getPixelRatio(ctx)
        // eslint-disable-next-line no-restricted-syntax
        for (const p of particles) {
          const v = Perlin.perlin2(p.x * period, p.y * period)
          ctx.fillStyle = `white`
          ctx.fillRect(p.x, p.y, 1.5, 1.5)
          const a = v * 2 * Math.PI + p.a
          p.x += 10 * Math.cos(a)
          p.y += 10 * Math.sin(a)
          // if (dimensions) console.log(dimensions)
          if (
            p.x < 0 ||
            p.x > canvas.width ||
            p.y < 0 ||
            p.y > canvas.height ||
            (dimensions &&
              dimensions.x &&
              p.x > dimensions.x * ratio &&
              p.x < (dimensions.x + dimensions.width) * ratio &&
              p.y > dimensions.y * ratio &&
              p.y < (dimensions.y + dimensions.height) * ratio)
          ) {
            p.x = Math.random() * canvas.width
            p.y = Math.random() * canvas.height
          }
        }

        // update
        requestId = requestAnimationFrame(render)
      }

      const prerender = () => {
        Perlin.seed(Math.random())
        for (let index = 1; index <= 50; index += 1) {
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
    return () => {}
  }, [canvas, ctx, dimensions])

  if (height !== 0) {
    return <StyledCanvas ref={canvasRef} height={width > 576 ? Math.floor(height * 0.8) : height} width={width} />
  }
  return <span />
})

export default RCanvas
