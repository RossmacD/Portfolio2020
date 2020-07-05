import { colors } from './variables'

export interface CssClassList {
  [id: string]: string
}

export const genClass: CssClassList = {
  altBG: `
    background-color: ${colors.white};
  `,
  redBG: `
  background-color: ${colors.red};
`,
  flexCenter: `
  display:flex;
  align-items:center;
  justify-content:center;
  `
}
