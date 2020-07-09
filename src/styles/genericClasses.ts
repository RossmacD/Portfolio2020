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
    top:-27rem;
    margin-bottom:-20rem;
  `,
  noMargin: `
    margin:0;`,
  fauxContainter: `
  width:100%;
    max-width:1200px;
    margin-left:auto;
    margin-right:auto;
    right:0;
  `,
  maxCont: `
  width:100%;
    max-width:1200px;
  `
}
