import * as React from 'react'
import styled from '@emotion/styled'
import { colors, breakpoints } from '../styles/variables'
import { getEmSize } from '../styles/mixins'

const StyledDisplay1 = styled.h1`
  margin-top: 0px;
  margin-bottom: 0px;
  text-transform: uppercase;
  text-shadow: -1px -1px 0px #8400ff, 1px 1px 0px #ff005a;
  text-align: center;
  color: ${colors.black};
  line-height: 1.1ch;

  ${(props: Display1Props) =>
    props.special
      ? `
      letter-spacing: -5.75vw;
      margin-left: -5.5vw;
      font-size: 41.25vw;
  `
      : `
      margin-left: -2vw;
      letter-spacing: -2.3vw;
      font-size: 15vw;
      @media (max-width: ${getEmSize(breakpoints.sm)}em) {
        font-size: 33vw;
      }
  `}

  ${(props: Display1Props) =>
    props.hide
      ? `
      animation: fadeout2 0.5s ease-out 0.2s forwards!important;
      @keyframes fadeout2 {
        0% {
          opacity: 100%;
        }
        99% {
          display: block;
          opacity: 0;
          transform:translateY(5vh)
        }
        100% {
          opacity: 0;
          display: none;
        }
      }
  `
      : `

  `}
`
interface Display1Props {
  special?: boolean
  hide: boolean
}

const Display1: React.FC<Display1Props> = ({ children, special, hide }) => {
  // if (!special) {
  //   return <StyledDisplay1>{children}</StyledDisplay1>
  // }

  // return <StyledSpecial1>{children}</StyledSpecial1>
  return (
    <StyledDisplay1 special={special} hide={hide}>
      {children}
    </StyledDisplay1>
  )
}

export default Display1
