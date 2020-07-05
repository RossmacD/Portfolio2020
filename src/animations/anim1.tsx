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

interface SharedSetup {
  ok: boolean
  ctx: CanvasRenderingContext2D
  canvas: HTMLCanvasElement
}

const sharedSetup = (canvasRef: React.RefObject<HTMLCanvasElement>): SharedSetup => {
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
      return { ok: true, ctx, canvas }
    }
  }
  // We can fake the type here as we will always check ok - (Which is essentially a type check)
  // before using either of the other two properties
  return { ok: false, ctx: (undefined as unknown) as CanvasRenderingContext2D, canvas: (undefined as unknown) as HTMLCanvasElement }
}

export const animOne = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  // Setup variables
  let requestId: number
  let i = 0
  // Render function
  const render = () => {
    const { ok, canvas, ctx } = sharedSetup(canvasRef)
    if (ok) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // ctx.beginPath()
      // ctx.arc(
      //   canvas.width / 2,
      //   canvas.height / 2 ,
      //   (canvas.width / 5) * Math.abs(Math.cos(i)) + canvas.width / 4,
      //   0,
      //   2 * Math.PI
      // )
      ctx.fillStyle = 'white'
      // ctx.fill()

      // Some kind of loop for particles
      // ctx.beginPath()
      // ctx.arc(canvas.width / 2, canvas.height / 3 - ((i * 20) % 50), 20, 0, 2 * Math.PI)
      // ctx.fill()

      ctx.beginPath()
      ctx.arc(canvas.width / 2, canvas.height / 2, (canvas.width / 5) * Math.abs(Math.cos(i)) + canvas.width / 4, 0, 2 * Math.PI)
      ctx.fillStyle = 'white'
      ctx.fill()

      ctx.beginPath()
      ctx.arc(canvas.width / 2, canvas.height / 2, (canvas.width / 4) * Math.abs(Math.cos(i + 2)), 0, 2 * Math.PI)
      ctx.fillStyle = 'black'
      ctx.fill()

      ctx.beginPath()
      ctx.arc(canvas.width / 2, canvas.height / 2, (canvas.width / 12) * Math.abs(Math.sin(i)), 0, 2 * Math.PI)
      ctx.fillStyle = 'white'
      ctx.fill()

      ctx.beginPath()
      ctx.arc(canvas.width / 2, canvas.height / 2, (canvas.width / 13) * Math.abs(Math.cos(i + 2)), 0, 2 * Math.PI)
      ctx.fillStyle = 'black'
      ctx.fill()

      ctx.beginPath()
      ctx.arc(canvas.width / 2, canvas.height / 2, (canvas.width / 15) * Math.abs(Math.cos(i + 2)), 0, 2 * Math.PI)
      ctx.fillStyle = 'white'
      ctx.fill()

      // update
      i += 0.05
      requestId = requestAnimationFrame(render)
    }
  }
  // Call next frame - this continues the loop
  render()
  return () => {
    cancelAnimationFrame(requestId)
  }
}
