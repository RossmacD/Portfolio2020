import React, { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
// import { render } from 'react-dom'
import Perlin from 'perlin.js'
import useWindowDimensions from '../utils/WindowDimensions'
import { sharedSetup, Particle } from '../animations/helpers'

const StyledCanvas = styled.canvas`
  // width: '100px';
  // height: '100px';
  position: absolute;
  z-index: -1;
`

// interface RCanvasProps {
//   // animation: (canvasRef: React.RefObject<HTMLCanvasElement>) => () => void
// }

const RCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const { height, width } = typeof window !== 'undefined' && window ? useWindowDimensions() : { height: 0, width: 0 }
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
        const period = 0.02
        // eslint-disable-next-line no-restricted-syntax
        for (const p of particles) {
          const v = Perlin.perlin2(p.x * period, p.y * period)
          // ctx.fillStyle = `hsla(${Math.floor(v * 360)}, 95%, 80%, 0.8)`
          ctx.fillStyle = `white`
          ctx.fillRect(p.x, p.y, 1.5, 1.5)
          const a = v * 2 * Math.PI + p.a
          p.x += 10 * Math.cos(a)
          p.y += 10 * Math.sin(a)
          if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
            p.x = Math.random() * canvas.width
            p.y = Math.random() * canvas.height
          }
          // if ( (p.x <= 0 )&& p.x < canvas.width && p.y >= 0 && p.y < h))) {
          //   p.x = Math.random() * canvas.width
          //   p.y = Math.random() * canvas.height
          // }
          //   _results.push(void 0)
          // }
        }

        // update
        counter += 0.05
        requestId = requestAnimationFrame(render)
      }

      const prerender = () => {
        Perlin.seed(Math.random())
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
