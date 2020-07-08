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
  `,
  flexCol: `
    display: flex;
    flex-direction: column;
  `,
  minContainer: `
  margin-top: 4rem;
  margin-bottom:6rem;
  `,
  breakContainer: `
    position:relative;
    top:-34rem;
    margin-bottom:-34rem;
  `
}
