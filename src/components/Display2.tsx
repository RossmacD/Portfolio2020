import * as React from 'react'
import styled from '@emotion/styled'
import { getEmSize } from '../styles/mixins'
import { breakpoints, colors } from '../styles/variables'

const StyledDisplay2 = styled.h2`
  margin-top: -1vw;
  color: ${colors.red};
  // color: ${colors.white};
  margin-bottom: 0px;
  text-transform: uppercase;
  // text-shadow: 0px 2px 0px #8400ff;
  font-size: 5vw;
  text-align: center;
  font-weight: 700;
  // @media (min-width: ${getEmSize(breakpoints.sm)}em) {
  //   animation: float 10s ease-in-out infinite;
  //   @keyframes float {
  //     0% {
  //       transform: translatey(0px);
  //     }
  //     50% {
  //       transform: translatey(2vw);
  //     }
  //     100% {
  //       transform: translatey(0px);
  //     }
  //   }
  // }

  @media (max-width: ${getEmSize(breakpoints.sm)}em) {
    margin-left: -1vw;
    font-size: 14vw;
    margin-top: 2vh;
  }

  ${(props: Display2Props) => {
    return props.hide
      ? `
      animation: fadeout 0.5s ease-out forwards!important;
      @keyframes fadeout {
        0% {
          opacity: 100%;
        }
        99% {
          display: block;
          opacity: 0;
          transform:translateY(-5vh)
        }
        100% {
          opacity: 0;
          display: none;
        }
      }
    `
      : `

    `
  }}
`

interface Display2Props {
  hide: boolean
}

const Display2: React.FC<Display2Props> = ({ children, hide }) => {
  React.useEffect(() => {
    // console.log(hide)
  }, [hide])
  return <StyledDisplay2 hide={hide}>{children}</StyledDisplay2>
}

export default Display2
