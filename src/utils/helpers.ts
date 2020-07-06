import { RgbColor } from 'polished/lib/types/color'

export const colorGradient = (fadeFraction: number, rgbColor1: RgbColor, rgbColor2: RgbColor, rgbColor3: RgbColor) => {
  let color1 = rgbColor1
  let color2 = rgbColor2
  let fade = fadeFraction * 0.01
  // console.log(fade, color1, color2)
  // Do we have 3 colors for the gradient? Need to adjust the params.
  if (rgbColor3) {
    fade *= 2

    // Find which interval to use and adjust the fade percentage
    if (fade >= 1) {
      fade -= 1
      color1 = rgbColor2
      color2 = rgbColor3
    }
  }

  const diffRed = color2.red - color1.red
  const diffGreen = color2.green - color1.green
  const diffBlue = color2.blue - color1.blue

  const gradient = {
    red: Math.floor(color1.red + diffRed * fade),
    green: Math.floor(color1.green + diffGreen * fade),
    blue: Math.floor(color1.blue + diffBlue * fade)
  }

  return gradient
}
